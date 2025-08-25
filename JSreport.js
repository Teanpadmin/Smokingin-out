//<link rel="stylesheet" href="style.css">
  //<script src="script.js"></script>

        const API_URL = 'https://script.google.com/macros/s/AKfycbxZc4HVXGRVT3H1IRsfkb8PmrmCahIBYaPxQk6uVEt2Dd0P64haRWAjjQP5DU4iMdAmXw/exec';
        let currentData = [];
        let filteredData = [];
        let currentPage = 1;
        const itemsPerPage = 8;

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            setCurrentDate();
            // Don't load data automatically - wait for user to click search
            displayEmptyState();
        });

        function setCurrentDate() {
            const today = new Date();
            const todayStr = today.toISOString().split('T')[0];
            document.getElementById('startDate').value = todayStr;
            document.getElementById('endDate').value = todayStr;
        }

        function getShiftFromTime(timeStr) {
            if (!timeStr) return 'Unknown';
            
            const time = new Date('2000/01/01 ' + timeStr.split(' ')[1]);
            const hours = time.getHours();
            
            if (hours >= 7 && hours < 15) return 'A';
            if (hours >= 15 && hours < 19) return 'B';
            if (hours >= 19 && hours < 23) return 'N';
            if (hours >= 23 || hours < 7) return 'C';
            if (hours >= 7 && hours < 19) return 'D';
            
            return 'Unknown';
        }

        function isOnTime(timeSpent) {
            if (!timeSpent || timeSpent === '') return false;
            return parseInt(timeSpent) <= 15;
        }



        function displayEmptyState() {
            // Clear summary cards
            document.getElementById('summaryCards').innerHTML = '';
            
            // Clear table
            const tableBody = document.getElementById('dataTable');
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="px-6 py-12 text-center text-gray-500">
                        <div class="flex flex-col items-center">
                            <i class="bi bi-search text-4xl mb-4 text-gray-300"></i>
                            <h3 class="text-lg font-medium mb-2">เลือกวันที่และกดค้นหา</h3>
                            <p class="text-sm">กรุณาเลือกช่วงวันที่และกดปุ่ม "ค้นหา" เพื่อดูข้อมูล</p>
                        </div>
                    </td>
                </tr>
            `;
            
            // Update pagination info
            document.getElementById('itemsInfo').textContent = '0-0 จาก 0';
            document.getElementById('currentPage').textContent = '1';
            document.getElementById('totalPages').textContent = '1';
            document.getElementById('pageNumbers').innerHTML = '';
            document.getElementById('prevBtn').disabled = true;
            document.getElementById('nextBtn').disabled = true;
        }

        async function searchData() {
            // First load all data if not loaded yet
            if (currentData.length === 0) {
                try {
                    Swal.fire({
                        title: 'กำลังโหลดข้อมูล...',
                        text: 'กรุณารอสักครู่',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });
                    
                    const response = await fetch(`${API_URL}?action=get`);
                    const data = await response.json();
                    
                    currentData = data.map(item => ({
                        ...item,
                        Shift: getShiftFromTime(item.Start),
                        OnTime: isOnTime(item.TimeSpent)
                    }));
                    
                } catch (error) {
                    console.error('Error loading data:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาด!',
                        text: 'ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง',
                        confirmButtonText: 'ตกลง'
                    });
                    return;
                }
            }

            // Filter data based on selected criteria
            Swal.fire({
                title: 'กำลังค้นหาข้อมูล...',
                text: 'กรุณารอสักครู่',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            setTimeout(() => {
                const startDate = document.getElementById('startDate').value;
                const endDate = document.getElementById('endDate').value;
                const selectedShift = document.getElementById('shiftSelect').value;
                
                let filteredData = currentData;
                
                // Filter by date range
                if (startDate && endDate) {
                    filteredData = filteredData.filter(item => {
                        const itemDate = new Date(item.Start.split(' ')[0].split('/').reverse().join('-'));
                        const start = new Date(startDate);
                        const end = new Date(endDate);
                        return itemDate >= start && itemDate <= end;
                    });
                }
                
                // Filter by shift
                if (selectedShift !== 'all') {
                    filteredData = filteredData.filter(item => item.Shift === selectedShift);
                }
                
                displayData(filteredData);
                updateSummary(filteredData);
                
                Swal.fire({
                    icon: 'success',
                    title: 'ค้นหาเสร็จสิ้น!',
                    text: `พบข้อมูลที่ตรงตามเงื่อนไข ${filteredData.length} รายการ`,
                    timer: 1500,
                    showConfirmButton: false
                });
            }, 500);
        }

        function displayData(data) {
            filteredData = data;
            currentPage = 1;
            renderTable();
        }

        function renderTable() {
            const tableBody = document.getElementById('dataTable');
            tableBody.innerHTML = '';
            
            // Group data by name to count rounds
            const groupedData = {};
            filteredData.forEach(item => {
                if (!groupedData[item.Name]) {
                    groupedData[item.Name] = [];
                }
                groupedData[item.Name].push(item);
            });
            
            // Convert to array for pagination
            const groupedArray = Object.keys(groupedData).map(name => ({
                name: name,
                data: groupedData[name]
            }));
            
            // Calculate pagination
            const totalItems = groupedArray.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentItems = groupedArray.slice(startIndex, endIndex);
            
            // Display current page data
            currentItems.forEach(group => {
                const name = group.name;
                const personData = group.data;
                const firstRecord = personData[0];
                const roundCount = personData.length;
                
                // Count on-time and late rounds
                const onTimeCount = personData.filter(item => item.Status === 'Complete' && item.OnTime).length;
                const lateCount = personData.filter(item => item.Status === 'Complete' && !item.OnTime).length;
                
                const row = document.createElement('tr');
                row.className = 'hover:bg-gray-50';
                
                // Extract date from Start time
                const dateOnly = firstRecord.Start ? firstRecord.Start.split(' ')[0] : '-';
                
                row.innerHTML = `
                    <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-900">${firstRecord.Id}</td>
                    <td class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <i class="bi bi-person-circle text-blue-500 mr-1"></i>${name}
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                        <i class="bi bi-calendar-date text-gray-500 mr-1"></i>${dateOnly}
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-center">
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <i class="bi bi-arrow-repeat mr-1"></i>${roundCount} ครั้ง
                        </span>
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-center">
                        ${onTimeCount > 0 ? 
                            `<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <i class="bi bi-check-circle-fill mr-1"></i>${onTimeCount}
                            </span>` : 
                            '<span class="text-gray-400"><i class="bi bi-dash-circle"></i></span>'
                        }
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-center">
                        ${lateCount > 0 ? 
                            `<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                <i class="bi bi-x-circle-fill mr-1"></i>${lateCount}
                            </span>` : 
                            '<span class="text-gray-400"><i class="bi bi-dash-circle"></i></span>'
                        }
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-center">
                        <button onclick="showDetail('${name}')" class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors" title="ดูรายละเอียด">
                            <i class="bi bi-info-circle mr-1"></i>ดูรายละเอียด
                        </button>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
            
            // Update pagination info
            updatePaginationInfo(totalItems, totalPages);
        }

        function showDetail(personName) {
            // Use filtered data instead of all current data to show only selected date range
            const personData = filteredData.filter(data => data.Name === personName);
            if (!personData.length) return;
            
            document.getElementById('modalTitle').innerHTML = `
                <i class="bi bi-person-badge text-blue-600 mr-2"></i>รายละเอียด - ${personName}
            `;
            
            const modalContent = document.getElementById('modalContent');
            
            // Create rounds display
            let roundsHtml = '';
            personData.forEach((item, index) => {
                const roundNumber = index + 1;
                const statusIcon = item.Status === 'Complete' ? 
                    (item.OnTime ? '<i class="bi bi-check-circle-fill text-green-600"></i>' : '<i class="bi bi-x-circle-fill text-red-600"></i>') :
                    '<i class="bi bi-clock text-yellow-600"></i>';
                
                roundsHtml += `
                    <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div class="flex items-center justify-between mb-3">
                            <h5 class="font-semibold text-gray-800 flex items-center">
                                <i class="bi bi-arrow-repeat text-blue-600 mr-2"></i>รอบที่ ${roundNumber}
                            </h5>
                            <div class="flex items-center space-x-2">
                                ${statusIcon}
                                <span class="px-2 py-1 text-xs rounded-full ${item.Status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                                    ${item.Status === 'Complete' ? 'เสร็จสิ้น' : 'รอดำเนินการ'}
                                </span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <i class="bi bi-box-arrow-in-right text-green-600 mr-2"></i>
                                    <span class="font-medium">เวลาเข้า:</span>
                                    <span class="ml-2">${item.Start}</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="bi bi-box-arrow-right text-red-600 mr-2"></i>
                                    <span class="font-medium">เวลาออก:</span>
                                    <span class="ml-2">${item.End || 'ยังไม่ออก'}</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <i class="bi bi-stopwatch text-blue-600 mr-2"></i>
                                    <span class="font-medium">เวลาที่ใช้:</span>
                                    <span class="ml-2">${item.TimeSpent || '-'} นาที</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="bi bi-shield-check text-purple-600 mr-2"></i>
                                    <span class="font-medium">กะ:</span>
                                    <span class="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">กะ ${item.Shift}</span>
                                </div>
                            </div>
                        </div>
                        
                        ${item.Status === 'Complete' ? 
                            `<div class="mt-3 pt-3 border-t border-gray-200">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm font-medium">ผลการประเมิน:</span>
                                    <span class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${item.OnTime ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                        ${item.OnTime ? '<i class="bi bi-check-circle-fill mr-1"></i>ตรงเวลา' : '<i class="bi bi-x-circle-fill mr-1"></i>ล่าช้า'}
                                    </span>
                                </div>
                            </div>` : 
                            `<div class="mt-3 pt-3 border-t border-gray-200">
                                <div class="flex items-center text-yellow-600 text-sm">
                                    <i class="bi bi-hourglass-split mr-2"></i>
                                    <span>รอการปฏิบัติงานให้เสร็จสิ้น</span>
                                </div>
                            </div>`
                        }
                    </div>
                `;
            });
            
            // Summary statistics
            const totalRounds = personData.length;
            const completedRounds = personData.filter(item => item.Status === 'Complete').length;
            const onTimeRounds = personData.filter(item => item.Status === 'Complete' && item.OnTime).length;
            const lateRounds = personData.filter(item => item.Status === 'Complete' && !item.OnTime).length;
            const pendingRounds = personData.filter(item => item.Status === 'Pending').length;
            
            modalContent.innerHTML = `
                <!-- Summary Statistics -->
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-6">
                    <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                        <i class="bi bi-graph-up text-blue-600 mr-2"></i>สรุปผลการปฏิบัติงาน
                    </h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-blue-600">${totalRounds}</div>
                            <div class="text-gray-600">รวมทั้งหมด</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">${onTimeRounds}</div>
                            <div class="text-gray-600">ตรงเวลา</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-red-600">${lateRounds}</div>
                            <div class="text-gray-600">ล่าช้า</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-yellow-600">${pendingRounds}</div>
                            <div class="text-gray-600">รอดำเนินการ</div>
                        </div>
                    </div>
                </div>
                
                <!-- Individual Rounds -->
                <div class="space-y-4">
                    <h4 class="font-semibold text-gray-800 flex items-center">
                        <i class="bi bi-list-ul text-gray-600 mr-2"></i>รายละเอียดแต่ละรอบ
                    </h4>
                    ${roundsHtml}
                </div>
            `;
            
            document.getElementById('detailModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('detailModal').classList.add('hidden');
        }

        function updateSummary(data) {
            const summaryCards = document.getElementById('summaryCards');
            const selectedShift = document.getElementById('shiftSelect').value;
            
            // Determine which shifts to show
            let shiftsToShow = ['A', 'B', 'C']; // Default shifts
            if (selectedShift === 'D' || selectedShift === 'N') {
                shiftsToShow = ['D', 'N'];
            } else if (selectedShift !== 'all') {
                shiftsToShow = [selectedShift];
            }
            
            // Calculate summary by shift
            const shiftSummary = {};
            shiftsToShow.forEach(shift => {
                const shiftData = data.filter(item => item.Shift === shift);
                const completed = shiftData.filter(item => item.Status === 'Complete');
                const onTime = completed.filter(item => item.OnTime);
                
                shiftSummary[shift] = {
                    total: shiftData.length,
                    completed: completed.length,
                    onTime: onTime.length,
                    pending: shiftData.filter(item => item.Status === 'Pending').length
                };
            });
            
            summaryCards.innerHTML = '';
            
            shiftsToShow.forEach(shift => {
                const summary = shiftSummary[shift];
                const onTimePercentage = summary.completed > 0 ? Math.round((summary.onTime / summary.completed) * 100) : 0;
                
                function getShiftTime(shift) {
                    switch(shift) {
                        case 'A': return '07:00-15:00';
                        case 'B': return '15:00-23:00';
                        case 'C': return '23:00-07:00';
                        case 'D': return '07:00-19:00';
                        case 'N': return '19:00-07:00';
                        default: return '';
                    }
                }
                
                const card = document.createElement('div');
                card.className = 'bg-white rounded-lg shadow-lg p-6';
                card.innerHTML = `
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-gray-800">กะ ${shift}</h3>
                        <span class="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                            ${getShiftTime(shift)}
                        </span>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-600">รวมทั้งหมด:</span>
                            <span class="font-semibold">${summary.total} รอบ</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">เสร็จสิ้น:</span>
                            <span class="font-semibold text-green-600">${summary.completed} รอบ</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">ตรงเวลา:</span>
                            <span class="font-semibold text-blue-600">${summary.onTime} รอบ</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">รอดำเนินการ:</span>
                            <span class="font-semibold text-yellow-600">${summary.pending} รอบ</span>
                        </div>
                        <div class="pt-2 border-t">
                            <div class="flex justify-between">
                                <span class="text-gray-600">อัตราตรงเวลา:</span>
                                <span class="font-semibold text-green-600">${onTimePercentage}%</span>
                            </div>
                        </div>
                    </div>
                `;
                summaryCards.appendChild(card);
            });
        }

        function exportToExcel() {
            if (currentData.length === 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'ไม่มีข้อมูล!',
                    text: 'ไม่มีข้อมูลสำหรับ Export กรุณาโหลดข้อมูลก่อน',
                    confirmButtonText: 'ตกลง'
                });
                return;
            }
            
            Swal.fire({
                title: 'กำลัง Export ไฟล์...',
                text: 'กรุณารอสักครู่',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            setTimeout(() => {
                try {
                    // Prepare data for export
                    const exportData = currentData.map(item => ({
                        'ID': item.Id,
                        'รหัสผู้ใช้': item.User,
                        'ชื่อ': item.Name,
                        'กะ': item.Shift,
                        'สถานะ': item.Status === 'Complete' ? 'เสร็จสิ้น' : 'รอดำเนินการ',
                        'เวลาเข้า': item.Start,
                        'เวลาออก': item.End || '-',
                        'เวลาที่ใช้ (นาที)': item.TimeSpent || '-',
                        'ตรงเวลา': item.Status === 'Complete' ? (item.OnTime ? 'ตรงเวลา' : 'ไม่ตรงเวลา') : '-'
                    }));
                    
                    // Create workbook and worksheet
                    const wb = XLSX.utils.book_new();
                    const ws = XLSX.utils.json_to_sheet(exportData);
                    
                    // Add worksheet to workbook
                    XLSX.utils.book_append_sheet(wb, ws, 'ข้อมูลเข้าออกสูบบุหรี่');
                    
                    // Generate filename with current date
                    const today = new Date().toISOString().split('T')[0];
                    const filename = `รายงานข้อมูลเข้าออกสูบบุหรี่_${today}.xlsx`;
                    
                    // Save file
                    XLSX.writeFile(wb, filename);
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Export สำเร็จ!',
                        text: `ไฟล์ ${filename} ถูกดาวน์โหลดเรียบร้อยแล้ว`,
                        confirmButtonText: 'ตกลง'
                    });
                    
                } catch (error) {
                    console.error('Export error:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Export ไม่สำเร็จ!',
                        text: 'เกิดข้อผิดพลาดในการ Export ไฟล์ กรุณาลองใหม่อีกครั้ง',
                        confirmButtonText: 'ตกลง'
                    });
                }
            }, 1000);
        }

        function searchTable() {
            const searchTerm = document.getElementById('tableSearch').value.toLowerCase();
            
            if (searchTerm === '') {
                filteredData = currentData;
            } else {
                filteredData = currentData.filter(item => 
                    item.Name.toLowerCase().includes(searchTerm)
                );
            }
            
            currentPage = 1;
            renderTable();
        }

        function updatePaginationInfo(totalItems, totalPages) {
            const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
            const endItem = Math.min(currentPage * itemsPerPage, totalItems);
            
            document.getElementById('itemsInfo').textContent = `${startItem}-${endItem} จาก ${totalItems}`;
            document.getElementById('currentPage').textContent = currentPage;
            document.getElementById('totalPages').textContent = totalPages;
            
            // Update pagination buttons
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === totalPages || totalPages === 0;
            
            // Generate page numbers
            generatePageNumbers(totalPages);
        }

        function generatePageNumbers(totalPages) {
            const pageNumbers = document.getElementById('pageNumbers');
            pageNumbers.innerHTML = '';
            
            if (totalPages <= 1) return;
            
            const maxVisiblePages = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            
            for (let i = startPage; i <= endPage; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.textContent = i;
                pageBtn.className = `px-3 py-1 text-sm rounded ${
                    i === currentPage 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`;
                pageBtn.onclick = () => goToPage(i);
                pageNumbers.appendChild(pageBtn);
            }
        }

        function changePage(direction) {
            const groupedData = {};
            filteredData.forEach(item => {
                if (!groupedData[item.Name]) {
                    groupedData[item.Name] = [];
                }
                groupedData[item.Name].push(item);
            });
            
            const totalPages = Math.ceil(Object.keys(groupedData).length / itemsPerPage);
            const newPage = currentPage + direction;
            
            if (newPage >= 1 && newPage <= totalPages) {
                currentPage = newPage;
                renderTable();
            }
        }

        function goToPage(page) {
            currentPage = page;
            renderTable();
        }


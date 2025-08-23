document.getElementById("reportBtn").addEventListener("click", () => {
 window.location.href = "reportsmoke.html";
});

async function loadUserAPI() {
    const apiURL = 'https://script.google.com/macros/s/AKfycbzrRORYa_EJvrzeGwhQqNpY556FvMAcMTk8qvtQlPl3lrv6T8NY4E46Ot_WUJ8i-1KuoA/exec';
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        
 
        const userAPI_formatted = data.reduce((obj, item) => {
            const userKey = String(item.User); 
            obj[userKey] = item.Name;
            return obj;
        }, {});
        
        // บันทึกข้อมูลที่จัดรูปแบบแล้วลงใน Local Storage
        localStorage.setItem('userAPI', JSON.stringify(userAPI_formatted));
        console.log('ข้อมูลผู้ใช้ถูกโหลดและบันทึกใน Local Storage เรียบร้อยแล้ว');
        
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการโหลดข้อมูลจาก API:', error);
    }
}



const API_URL = "https://script.google.com/macros/s/AKfycby1J2DDrz_FAzzlJ-gmbnoZRwV5MVzaqe5HPj93hVa08YmyhG-P8IQPX-Mo6Di31pJ1mA/exec";
let localRecords = JSON.parse(localStorage.getItem("records") || "[]");
let updateInterval;

function generateId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function formatTime(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return "";
  const hh = d.getHours().toString().padStart(2, "0");
  const mm = d.getMinutes().toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

function renderTable() {
  const storedAPI = localStorage.getItem('userAPI');
  const userAPI = storedAPI ? JSON.parse(storedAPI) : {};
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";
  clearInterval(updateInterval);

  document.querySelector("#dataTable thead th:nth-child(7)").style.display = "none";

  localRecords.forEach(rec => {
    if (rec.Status === "Pending") {
      const tr = document.createElement("tr");

      const statusBarHtml = `
        <div class="status-bar-container">
          <div class="status-bar" data-start="${rec.Start}" data-id="${rec.Id}">
            <span class="status-bar-text"></span>
          </div>
        </div>
      `;

      tr.innerHTML = `
        <td>${rec.Id}</td>
        <td>${rec.User}</td>
        <td>${userAPI[rec.User] || 'ไม่พบชื่อผู้ใช้ในระบบ!!'}</td>
        <td>${rec.Status}</td>
        <td class="time-cell">${formatTime(rec.Start)}</td>
        <td style="width: 200px;">${statusBarHtml}</td>
        <td></td>
        <td></td>
      `;

      const btnTd = tr.querySelector("td:last-child");
      const btn = document.createElement("button");
      btn.textContent = "Complete";
      btn.addEventListener("click", async () => {
        btn.classList.add("animate-gradient");
        await new Promise(resolve => setTimeout(resolve, 100));
        btn.classList.remove("animate-gradient");
        updateRecord(rec.Id, rec.User);
      });
      btnTd.appendChild(btn);
      tbody.appendChild(tr);
    }
  });

  updateInterval = setInterval(updateProgressBars, 1000);
  localStorage.setItem("records", JSON.stringify(localRecords));
}

function updateProgressBars() {
  document.querySelectorAll(".status-bar").forEach(bar => {
    const startTime = new Date(bar.dataset.start);
    const now = new Date();
    const minutesSpent = Math.round((now - startTime) / 60000);

    const maxMinutes = 15;
    const percentage = Math.min(Math.round((minutesSpent / maxMinutes) * 100), 100);

    bar.style.width = `${percentage}%`;
    bar.querySelector(".status-bar-text").textContent = `${percentage}%`;

    if (minutesSpent < 10) {
      bar.className = "status-bar green-bar";
    } else if (minutesSpent < 15) {
      bar.className = "status-bar yellow-bar";
    } else {
      bar.className = "status-bar red-bar";
    }
  });
}

async function createRecord(user) {
  await Swal.fire({
    icon: 'success',
    title: 'กำลังสร้างใหม่...',
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const progressBar = Swal.getPopup().querySelector('.swal2-timer-progress-bar');
      if(progressBar){
        progressBar.style.background = 'linear-gradient(90deg, #4285f4, #34a853)';
      }
    }
  });
  const newRec = {
    Id: generateId(),
    User: user,
    Status: "Pending",
    Start: new Date().toISOString(),
    End: "",
    TimeSpent: ""
  };
  localRecords.push(newRec);
  renderTable();
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "create", data: newRec }),
    });
    await res.json();
  } catch (e) {
    console.error("Create error:", e);
  }
}

window.updateRecord = async function updateRecord(id, user) {
  await Swal.fire({
    icon: 'info',
    title: 'กำลังอัพเดต...',
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const progressBar = Swal.getPopup().querySelector('.swal2-timer-progress-bar');
      if(progressBar){
        progressBar.style.background = 'linear-gradient(90deg, #4285f4, #34a853)';
      }
    }
  });
  const now = new Date().toISOString();
  const rec = localRecords.find(r => r.Id === id && r.User === user);
  if (!rec) return;
  const startTime = new Date(rec.Start);
  const endTime = new Date(now);
  const minutesSpent = Math.round((endTime - startTime) / 60000);

  localRecords = localRecords.filter(r => !(r.Id === id && r.User === user));
  renderTable();

  const updateData = {
    Id: id,
    User: user,
    Status: "Complete",
    Start: rec.Start,
    End: now,
    TimeSpent: minutesSpent
  };
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "update", data: updateData }),
    });
    await res.json();
  } catch (e) {
    console.error("Update error:", e);
  }
}

async function loadData() {
  const refreshIcon = document.getElementById("refreshIcon");
  refreshIcon.classList.add("spin");
  try {
    const res = await fetch(API_URL + "?action=read");
    const data = await res.json();

    const normalizedData = data.map(item => ({
      Id: item.Id || item.id || "",
      User: item.User || item.user || "",
      Status: item.Status || item.status || "",
      Start: item.Start || item.start || "",
      End: item.End || item.end || "",
      TimeSpent: item.TimeSpent || item.timeSpent || ""
    }));

    localRecords = normalizedData.filter(r => r.Status === "Pending");
    loadUserAPI();
    if (localRecords.length === 0) {
      const tbody = document.querySelector("#dataTable tbody");
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align:center; padding:20px; color:#666;">
            ไม่มีข้อมูลแสดงรายการ
          </td>
        </tr>
      `;
      localStorage.setItem("records", JSON.stringify(localRecords));
      return; // ไม่ต้อง renderTable เพราะไม่มีข้อมูล
    }

    renderTable();
  } catch (e) {
    console.error("Load data error:", e);
    Swal.fire({
      icon: 'error',
      title: 'โหลดข้อมูลล้มเหลว',
      text: 'ไม่สามารถโหลดข้อมูลจากเซิร์ฟเวอร์ได้ กรุณาลองใหม่',
    });
  } finally {
    refreshIcon.classList.remove("spin");
  }
}

  document.getElementById("userInput").addEventListener("keypress", e => {
  if (e.key === "Enter") {
    const user = e.target.value.trim();
    if (user) {
      createRecord(user);
      e.target.value = "";
    }
  }
});
  
  
document.getElementById("refreshBtn").addEventListener("click", loadData);
loadData();
loadUserAPI();
renderTable();

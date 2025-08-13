document.getElementById("reportBtn").addEventListener("click", () => {
 window.location.href = "reportsmoke.html";
});
//<link rel="stylesheet" href="style.css">
  //<script src="script.js"></script>
// รหัสผู้ใช้กับชื่อ
const userAPI = {
  'LO000554':'อรัญญา วงษ์สาลี',
            '22654012':'Pattamar Jarernkadet',
            '23329429':'Nilubol.Suksawad',
            '30034388':'Krengsak',
            '40161155':'Jiranya Namsai',
            'LO000686':'อรทัย นิลกระจ่าง INV',
            'TF-000751':'Aphatcha  Harankun',
            '30117860':'วิไลลักษณ์  ฝั่งแก้ว',
            '30075399':'น.ส.ชัชญา  ฝังแก้ว',
            '30106375':'น.ส.ชลธิชา  แก้วปิง',
            '30106632':'สมพิศ มหาเอี่ยม',
            '40098229':'มนญา  สายทอง',
            '30117859':'นายอภิวัช ฝังแก้ว',
            '40098210':'ยะห์ยา หะแม',
            '30106361':'จันทร์รุ่ง สุขชู',
            '30117861':'นายณัฐพล  ไวยจลา FL',
            '40098217':'Preecha Jehmae',
            '30116124':'นายสุวิชัย มวลชัยภูมิ',
            '40098257':'นายกษิดิศ ทามาตร์',
            '30113490':'น.สลลิตา ตันติวัฒนกูล',
            '40098151':'ไลลา อีปง',
            '40098199':'อรัญญา บุญด้วง',
            '30067231':'กัญญาณัฐ   จีตรประพันธ์',
            '30113507':'นายโกมินทร์  มหาเอียม',
            '30113521':'น.ส.กฤตพร มวลชัยภูมิ',
            '30116127':'นายทิพย์โกศล เฟื่องวงษ์',
            'TF258':'LLK  กิตติพันธ์ สุทธิประภา',
            'Store5112-Pet':'Store5112-Pet',
            'PatcharapornR':'Patcharaporn Rewrut HO',
            'JaruwanB':'Jaruwan Boonta HO',
            'PunnaratL':'Punnarat Lertpakornchai HO',
            'pinsudam':'Pinsuda Mimaphunt HO',
            'Danitap':'Danita Pengpituck HO',
            'SupitchayaS':'Supitchaya Sangmookda HO',
            'KamolchanokU':'Kamolchanok Unthawatnudda HO',
            'NunthatchapornK':'Nunthatchaporn Krittiyarungsun HO',
            '40143939':'วิมลศรี ดีใจ',
            '40143938':'ศิรินทรา เริงฤทธิ์',
            'ThanchanokW':'Thanchanok Woottireakchai',
            'LO000403':'Abdulloh munoh',
            'LMK0185':'LLK สุพัตรา สุขฤทธิ์',
            'LO000483':'Marowi hamae',
            'Kanyawee.Padmadilok@lotuss.com':'Kanyawee Padmadilok',
            '30075429':'สุไรยา  หมัดวัง',
            '40098215':'วรรรณภา  รัตนาวา',
            '1400074':'Narongchai.Wongdee',
            'TF-000695':'sawitree Mahaiam',
            'LAWN0247':'Araya Aeimrum',
            'TF404':'LLK ขจรยศ ไซนาง',
            'LMK0277':'Rungnapa',
            'LMK0276':'LLK Amporn Salaklang',
            'LMK0273':'LLK Kroyjai Petsankam',
            'worarat.jiranuchaiwatana@lotuss.com':'Worarat Jiranuchaiwatana',
            'LMK0144':'LLK Wilawan Prachayapaisan',
            'LMK0248':'LLK Namaoi Petsankam',
            'LMK0221':'LLK Rachanee Peeprom',
            'TF000543':'Visuth  Greeauksron',
            'TF-000773':'Parawati  Yudram',
            '22332419':'Apisak Chaowarit',
            'LT01347':'Teeranan Homklang',
            '30116131':'วรรณนิภา สังช์แปลงกาย',
            'ABSS':'ABSS',
            'TF-000755':'Sirikul  Pairot',
            'LAWN0281':'น.ส.พิมพา สายยศ',
            'LAWN0282':'น.ส.ณัทฐา คงสมแก้ว',
            'TF-000774':'Sirirat  Buasiri',
            'TF-000756':'Thitima   Pansongnam',
            'TF-000752':'Somsri  Thutijan',
            'LO000567':'น้ำอ้อย อินเหล็ก',
            'TF-000775':'Malinee Habsuwan',
            'LO000569':'Onechai kamlek',
            'LO000570':'Naruedol butsri',
            'TF-000696':'Vatsana   Sikhruea',
            'TF000697':'Pannipat  Kutan',
            'TF-000698':'Phikun  Chanlaphan',
            'TF000699':'Thanathip  Kunlabut',
            'JetrinR':'Jetrin Romchatngoen',
            'LO000581':'lakkhanawadee  maneewan',
            'LAWN0331':'Suwanun  Jaroenphol',
            'LAWN0292':'Paweena Mkaudtong',
            'LAWN0332':'Chahwiwan  Lirat',
            'LAWN0294':'Tararat Khajistsisakul',
            'LO000571':'พีระพงษ์ พันธพนม',
            'LO000572':'ณหทัย ศรีม่วง',
            'LAWN0309':'Sukanya  Khorpermklang',
            'LO000574':'มลฤดี วิเศษวงษา',
            'TF-000700':'ปรียาพร จิตรประพันธ์',
            'TF000544':'Pranada Dongjaroen',
            'TF-000701':'รัตติญาภรณ์ จิบจันทร์',
            'TF-000702':'อรญา แน่นอุดร',
            'TF-000703':'สุกัญญา จานนอก',
            '1400799':'Prach Sawangngam',
            'LO000704':'สุวนันท์ รุจิพรต INV',
            '40143852':'อลงกรณ์ จำปาจวบ',
            'TF000573':'Suneeta  Puteh',
            '40149686':'จิลลาภัทร กล้าแข็ง',
            'LO000705':'ราตรี ตะธุง INV',
            'LO000673':'Pawwena paleebat',
            'TF000580':'Thanachai    Khamphira',
            '40149682':'พัชรพล ผลพูน',
            '40149607':'นิตัสนีม สะแปอิง',
            '40143869':'ศกุลชัย จำปาเต็ม',
            'TF000586':'Jurarat   Jibjan',
            '40149684':'Chackree  Homdoung',
            '40149623':'บุศรินทร์ มาลา',
            'TF-000306':'Abdulomae  Madeeyoh',
            '40143870':'วรางคณา เสือกระจ่าง',
            'LAWN0202':'Watcharaporn  Seethakae',
            'TF544':'LLK ทศวรรษ พรหมเทพ',
            '40149688':'Sutthisa  Sasan',
            'TF-000776':'Ajcharaporn  Thongmee',
            '40149690':'เนตรชนก ไชยสุรินทร์',
            'TF-000777':'Nilawan  Jaidee',
            'TF-000778':'Prapatsorn  Gaiyafai',
            'TF-000779':'Pantawat  Wisitsart',
            'LAWN0274':'Namfon  Paomang',
            'LO000590':'กันติศักดิ์  เลาะไธสง',
            'LAWN0279':'Siriwan  Khanpsetsr',
            '40143876':'Sunainah phuhada',
            'TF545':'LLK ชาตินันท์ ทองปิ่น',
            'TF000708':'สุนารีรัตน์  สุขเฉลิมศรี',
            '40149643':'นูรีซาวาตี สือตาปอ',
            'LAWN0339':'Ratchaphong  Bunprasoet',
            '40143868':'อลิษา บุปผาดาษ',
            '40143866':'สุกัลยา พรรณโกมุท',
            'LAWN0340':'Suphattra  Prasongsuk',
            'LO000591':'ศิริพร พรหมมา',
            '40127795':'Nantawat Siriwan',
            '40143865':'Wannayut thongbu',
            '40149613':'Suwanna dathong',
            'Parita.Pattamarungson@lotuss.com':'Parita Pattamarungson',
            '40149697':'Sakchai phanchompoo',
            'LO000392':'Arun phuengkit',
            '40143848':'ฮายาตี ตามหามะ',
            'LO000397':'Orani banchongsad',
            'TF-000499':'วรางคณา เสือกระจ่าง',
            'TF-000704':'Kamolwan  Somnarin',
            'TF-000705':'Nantwan  Pakeepron',
            'TF-000706':'Wanpen  Laksarat',
            'LAWN0303':'Kanyaphak  Sakoon',
            'TF441':'LLK ศิรินาถ เตชะวงส์',
            'LO000576':'Jitiwat wongchalee',
            'LO000577':'Rungrot khemkhao',
            'LO000578':'Vipawan hunghuan',
            'LO000663':'Chantana Aree',
            'LAWN0341':'Athicha  Radomboon',
            'LAWN0342':'Siranee  Ployjaroen',
            'LAWN0343':'Surawan  Chankhum',
            'LAWN0344':'Siriporn  Buttawang',
            'LAWN0345':'Arisa  Phansri',
            'LAWN0346':'Nawaporn  Sangkaha',
            'LO000687':'Ahamakusaima sulong',
            'LO000688':'Poowadet tiamtipaboonkorn',
            'LO000689':'Tumtada chuntong',
            'LO000690':'Samitchayanan sitkhamkhun',
            'LO000691':'Orawan phengtham',
            'LO000692':'Nongnuch waisopee',
            'LO000693':'Chanchanok prachumrak',
            'LO000694':'Sarawut junkun',
            '40168888':'Papanggorn',
            'LMK0471':'LLK เจนณรงค์ ประเสริฐกุล',
            'TF-548':'LLK ยุทธนา ตาสว่าง',
            'TF-549':'LLK ณัฐพร แสวงสินธิ์',
            'LMK0472':'LLK อชรายุ ประเสริฐกุล',
            'LO000706':'สุรศักดิ์ INV',
            '40147919':'Arunrat Talodthaisong',
            'LO000664':'Prabpram Phuthe',
            'TF-000753':'Pattama  Tanmuang',
            'TF-000754':'Prasong  Khaianthong',
            'LO000665':'Pramot thongsamsi',
            'LO000666':'Airisa phopraphan',
            'LO000667':'Saowalak khemlek',
            'LO000668':'Ronnakon rombuakaeo',
            'LO000669':'Kairung lorthong',
            'LO000671':'Civadon sornjit',
            'LAWN0328':'Sasitorn Klamklang',
            'LAWN0308':'Chanisa  Srisaard',
            'LO000695':'Nutthapool pimson',
            'LAWN0310':'Pachara  Thonghom',
            'LAWN0311':'Naiyana  Thonghom',
            'LAWN0313':'Wanida  Kongman',
            'LO000579':'Russia janyanai',
            'LO000582':'Sireethon khamyai',
            'TF000707':'Thidarat  Khongsomaut',
            'TF-000709':'Sombat  Chanthakhet',
            'TF440':'LLk  Natthapol  namseana',
            'TF458':'LLK อาทร ภูคำตา',
            '40114570':'patchara J.',
            'TF-000758':'Niramon  Sripan',
            'LAWN0318':'จิราภรณ์  แก้วล้าน',
            'LAWN0319':'บุษรา  เสนา',
            'LAWN0320':'ฉันทพิชญา  บุตรโคตร',
            'LAWN0321':'ศิริญญา  บุญทัน',
            'LAWN0322':'วรรณลักษณ์  วงละคร',
            'LAWN0323':'สุทธาสินี  ปาปะนัง',
            'TF-000710':'ธณาภัทร  สารหน่อแก้ว',
            'TF000711':'ลลิตา เถาว์ชาลี',
            'TF000712':'ศิริรัตน์ เจริญพันธ์',
            'TF000713':'กัลยา พิมพ์ดา',
            'TF000714':'ณรงค์กรณ์   สาระวงศ์',
            'TF000715':'ชัยมงคล ลาเลิศ',
            'LO000583':'ผกามาศ อิ่มชา',
            'siranya.janhom3@lotuss.com':'Siranya Janhom',
            'LO000585':'ทิราวรรณ คนรู้',
            'LO000586':'ทิพย์นภา พงษ์ทอง',
            'LO000587':'Sikrin Dokchaem',
            'LO000588':'วิรัลพัชร เกลียววงษ์',
            'LO000589':'รัตนนันท์ อุดม',
            'Warinton':'วรินทร กิจเจริญ',
            '40149610':'จุฬารัตน์ จิบจันทร์',
            'LO000568':'Natrdow charuprachu',
            'LO000662':'วิวัตน์ ขัดยอด',
            'Thunjira.Paramee@lotuss.com':'Thunjira Paramee',
            'aditth':'adisorn itthichindathong',
            '40149650':'ฟาซียา มะแสหา',
            '40149653':'ซีตี มะแสหา',
            'Anusara.Buaphuan@lotuss.com':'Anusara Buaphuan',
            'Tatchaya.Eamlaead@lotuss.com':'Tatchaya Eamlaead',
            'Jetrin.Romchatngoen@lotuss.com':'Jetrin Romchatngoen',
            'LO000685':'นันวิสา บัวครื้น',
            'LO000584':'จารุนันท์ ฉัฐประภา',
            'LMK0247':'Panarat timjareon',
            'pakamas.asokbunrat@lotuss.com':'pakamas.asokbunrat@lotuss.com',
            'LO000670':'Samitchayanan sitkhamkhun',
            'TF-000757':'Supansa  Treemongkol',
            'TF-000759':'Dusit  Simchan',
            'LAWN0329':'Lawat  Mirtmart',
            'LAWN0330':'Amonrat  Aerferphan',
            'TF439':'LLk  Athit chaihatep',
            'LO000696':'Phetcharin sinsawat',
            'LO000697':'Phathrapol padchim',
            'LO000698':'Irada poonsawat',
            'LO000699':'Araya mintohsama',
            'TF-000772':'พีรยุทธ  หยิบยก',
            'LO000700':'Kittipong chaiwong',
            'LO000701':'Sirirak ouengyaem',
            'LAWN0336':'สุวรรณี  นลทัพ',
            'LAWN0337':'วรรณา  ทันจั่น',
            'LAWN0338':'ธัญลักษณ์  ปรีชา',
            'LO000679':'วีราวัฒน์ พรมสีหา',
            'LO000680':'กนิษฐา สาระสิทธ์',
            'LO000681':'Surachart Panumran',
            'LO000682':'ปิยธิดา รัตนบุรมย์',
            'LO000683':'นันทฉัตร ทองจันทร์',
            'LO000684':'ชลนภา เสมแย้ม',
            'LAWN0347':'Thanyarat  Suepsuan',
            'LAWN0348':'Nipada  Jaritram',
            'LAWN0349':'Jantra  Saiyoyjaroen',
            'LAWN0350':'Rattanathon  Chidchob',
            'LAWN0351':'Kamolthip  Madwang',
            'LAWN0352':'Piyathida  Kanthama',
            'TF-000781':'Jitrawan  Rurnros',
            'TF-000782':'Wilailak  Prasitsuwan',
            'TF-000784':'Ratrawin  Singhaphat',
            'LO000703':'คณาพร ศรีวิไล INV',
            'LO000702':'ภาวดี แก่นศรียา INV',
            '*LAWN0339*':'Ratchaphong  Bunprasoet',
            '*LAWN0340*':'Suphattra  Prasongsuk',
            'TF000709':'Sombat  Chanthakhet',
            'TF-000786':'ภัทร์สินี ชายเชิด',
            'TF-000787':'สุมณฑา  หารเสนา',
            'TF-000788':'พัชรี  มูลเพ็ง',
            'TF-000789':'จินตะหรา   วิชุมา',
            'TF-000790':'พงศา  แสงสด',
            'TF-000791':'สาริน เกิดมากมี',
            'TF-000792':'สาโรจน์  เกิดมากมี',
            'LAWN0353':'จิรพงศ์  เอี่ยมสอาด',
            'LAWN0354':'วชิรวิทย์  ศรีชมชื่น',
            'LAWN0355':'พรพิมล  วรวิเศษ',
            'LAWN0356':'Anchanlika Aksonchai',
            'LAWN0357':'อภิญญา  ปานทอง',
            'LAWN0358':'วรณัน  คำพันธ์',
            'LO000708':'Paiboon Semkham',
            'LO000709':'สุพรรณษา สิทธิศรีจันทร์',
            'LO000710':'รัตติยา พะชะ',
            'LO000711':'ธวัชชัย รัตนดิลก ณ ภูเก็ต',
            'LO000712':'ณัฐพล ศรีสิทธิ์',
            'TF000786':'ภัทร์สินี ชายเชิด',
            'TF000787':'สุมณฑา  หารเสนา',
            'TF000788':'พัชรี  มูลเพ็ง',
            'TF000789':'จินตะหรา   วิชุมา',
            'TF-000790':'พงศา  แสงสด',
            'TF000791':'สาริน เกิดมากมี',
            'TF000792':'สาโรจน์  เกิดมากมี',
            'LO00554':'อรัญญา วงษ์สาลี',
            '*TF-000775*':'Malinee Habsuwan',
            'TF-000699':'Thanathip  Kunlabut',
            'TF-000708':'สุนารีรัตน์  สุขเฉลิมศรี',
            'LAWN0359':'Jaruwan  Mueangjan',
            'LAWN0360':'Kamonwan  Oonnom',
            'LAWN0361':'Rungthiwa  Mongkhonsa',
            'LAWN0362':'Jiraphon  Phanta',
            'TF-000795':'นฤมล ผลผกา',
            'TF-000793':'วัชรวุธ  จันทองศรี',
            'TF-000796':'ฤดี  ทาบึงกาฬ',
            'LO000713':'Sinchai pomsuwan',
            'LO000714':'Daeng phromchuen',
            'LO000715':'Netiphong leejoeiwara',
            'TF-000797':'Pornthiwa Chomchuen',
            'TF-000798':'Parita Wichaisorn',
            'TF-000799':'Sujitrtra  Chodchoy',
            'TF-000800':'Rattanaporn  Tapsang',
            'LO000717':'Sirinthara khamsing',
            'LO000718':'Taweeporn klaymang',
            'LO000719':'Natthaphon prathomsao',
            'LO000720':'Jariya pruanpramoon',
            'LO000722':'Janjila phanwilai',
            'LO000485':'Marowi hamae',
            'LAWN0363':'Em-on  Nobphatham',
            'LAWN0364':'Rusna  Pagoh',
            'LAWN0365':'Suraya  Chaminu',
            'LAWN0367':'Jittiphorn  Pinijlum',
            'LAWN0368':'Natthapong  Noklek',
            'LO000723':'Nantana nonkhemprom',
            'LO000724':'Sa-ngob somsuwan',
            'LO000725':'Yuparat chanthabut',
            'LO000726':'Paweena jandee',
            'LO000727':'Jakkrit maliwong',
            'LO000728':'Napussorn meeporn',
            'LO000729':'Wipaporn pangderm',
            'LO000730':'Kannika prasretsri',
            'LO000731':'Chawvalit roobchang',
            'TF-000801':'Kanokkorn  Whanthamma',
            'TF-000802':'Phongsakorn  Khamsomsri',
            'LAWN0369':'Nattida  Tinrat',
            'LAWN0370':'Yuwadi  Taridno',
            'LO000732':'Ratiphon phomnoi',
            'LO000733':'Suthinee buranaphan',
            'LO000734':'Aphichat jaisaen',
            'LO000735':'Duidao prasobnet',
            'LO000736':'Kiettipong leejoy',
            'LO000737':'Sasiwimon bangrod',
            'LO000739':'Phakhaphon badinyot',
            'TF-000803':'Butsarakham  Bunla',
            'TF-000804':'Sutita. Makmai',
            'TF-000805':'Sahaphon  Kaeworrasan',
            'LAWN0371':'Natthawat  Wannimit',
            'LAWN0372':'Thammarin  Poonnanon',
            'LAWN0373':'Getsara  Srithongtoom',
            'LAWN0374':'Kijnapakorn  Yodtian',
            'LAWN0375':'Piyanan  Phonyaim',
            'TF-000810':'Minthada  Boksanthia',
            'TF-000811':'Rungthiwa  Lakeao',
            'TF-000812':'Sitimaryam  Uma',
            'TF-000813':'Nopphakao  Chenchob',
            'TF-000814':'Piyawat  Trichai',
            'LO000745':'Panida kiangdee',
            'LO000746':'Thongplaw yothathit',
            'LO000747':'Sasi-arpa seesung',
            'LO000748':'Suphattra arnukan',
            'LO000749':'Thananya khatawong',
            'LO000750':'Supawadee wachimaphet',
            'LO000751':'Nichapat Boonyaritchinnapong',
            'LO000752':'Pattarawadee wongsasom',
            'LO000753':'Supachok phumara',
            'TF-000828':'Chananthida  Jirapanyawat',
            'TF-000829':'Wanchai  Chamnianla',
            'TF-000830':'Nuttanan  Adomdee',
            'TF-000831':'Rattana  Youngthin',
            'TF-000832':'Nadeeya  Gateh',
            'TF-000833':'Wiphawan  Sanwang',
            'TF-000834':'Ponsuree  Noysee',
            'LO000755':'Nuengruethai chaiyawut',
            'LO000756':'Anupab pipattanabawornkun',
            'LO000757':'Wannapahatsorn rujijan',
            'LO000758':'Audomsak sikham',
            'LAWN0376':'Khatcharin  Rodphai',
            'LAWN0377':'Nopparut  Jaikaew',
            'LAWN0378':'Napasin  Pantusan',
            'LAWN0379':'Kwanthanaporn  Nupoai',
            'LAWN0380':'Narintorn  Maoleethong',
            'TF-000840':'Teerasak  Taentai',
            'TF-000841':'Sathit  Jaradsri',
            'TF-000842':'Somboon Ditsarathron',
            'TF-000843':'Anong  Sacharoen',
            'TF-000844':'Thanaphat  Thongsun',
            'TF-000845':'Praphatson  Rotbunyang',
            'TF-000846':'Patcharapong  Sroisranoi',
            'TF-000847':'Anuwat  Anantapong',
            'TF-000848':'Somjai  Pongsri',
            'LO000773':'Kittipong siriyotha',
            'LO000774':'Suttirat yindeeket',
            'LO000775':'Sompong jehsoh',
            'LO000776':'La-or pi',
            'LO000777':'Rungthip rueangyubon',
            'STMJOB01':'Suphanan nathawin',
            'STMJOB02':'Nobpharat bucha',
            'STMJOB03':'Sutharat songsaeng',
            'STMJOB04':'Rujipa jirakul',
            'STMJOB05':'Somtawil sanjawood',
            'STMJOB06':'Wilaiwan seebanyen',
            'STMJOB07':'Prasong kaewsanit',
            'STMJOB08':'Suphansa srinual',
            'STMJOB09':'Nattamol sophim',
            'STMJOB10':'Naree peethong',
            'STMJOB11':'Suphansa namsang',
            'STMJOB12':'Srosuda sittikoi',
            'STMJOB13':'Kritsana maneephak',
            'STMJOB14':'Pongsathon aimnoi',
            'STMJOB15':'Ruetisit sakunshotjaiyen',
            'STMJOB16':'Adun thaweesat',
            'STMJOB17':'Wattana charernsuk',
            'STMJOB18':'Suthad thong-ma',
            'STMJOB19':'Yada chomsri',
            'STMJOB20':'Poramet autthiya',
            'STMJOB21':'Oraphan pongsiri',
            'STMJOB22':'Noppadon pangnaree',
            'STMJOB23':'Wilay noypa',
            'STMJOB24':'Sopawadee jirangda',
            'STMJOB25':'Phonphimon sakunpham',
            'STMJOB26':'Piyanuch jitsomnuek',
            'STMJOB27':'Warat chaipipat',
            'STMJOB28':'Chanpen wannapap',
            'STMJOB29':'Visata sirikit',
            'STMJOB30':'Ratchada kaeosawan',
            'STMJOB31':'Saengrawee poonkasikarn',
            'STMJOB32':'Sunisa pimsuwan',
            'STMJOB33':'Ponnipa pimsuwan',
            'STMJOB34':'Teerachat srikongphet',
            'STMJOB35':'Chamnian moolsungnoen',
            'STMJOB36':'Chaiyakit wounsaew',
            'STMJOB37':'Rujira pilasapa',
            'STMJOB38':'Wannisa naimsudchai',
            'STMJOB39':'Pairin kuna',
            'STMJOB40':'Vanchai tapad',
            'STMJOB41':'Supaporn wongchangchue',
            'STMJOB42':'Vitoon sraran',
            'STMJOB43':'Saksili noommuang',
            'STMJOB44':'Chalakorn mettatham',
            'STMJOB45':'Dolyanee khantharithi',
            'STMJOB46':'Sunaree ragtham',
            'STMJOB47':'Katsirin phunglek',
            'STMJOB48':'Archa sakanin',
            'STMJOB49':'Hansa samanmuang',
            'LAWN0381':'Noppadon  Pangnaree',
            'LAWN0382':'Oraphan  Pongsiri',
            'LO000793':'Suphansa srinual',
            'LO000794':'Nattamol sophim',
            'LO000795':'Thanakon seema',
            'LO000796':'Montree rujiprot',
            'LO000797':'Ekkachai tonjumpa',
            'TF-000864':'Nopparat  Buakao',
            'TF-000865':'Wilaiwan  Klamgeen',
            'TF-000866':'Sukan Ya Duangkam',
            'TF-000867':'Hataikarn  Seepuk',
            'TF-000868':'Ratchanon  Sihabong',
            'TF-000869':'Sunantha  Sriket',
            'TF-000870':'Charinee  Gosinraksa',
            'TF-000871':'Rorhaning  Che-mah',
            'TF-000872':'Ratchaneekon  Ruensat',
            'LO000841':'Firdows leeadae',
            'LO000842':'Janjira sornjit',
            'LO000843':'Khanabodin ngamdee',
            'LO000844':'Nannipit sriphet',
            'TF-000900':'Manthana Sueakrajang',
            'TF-000901':'Bukhori Auseng',
            'TF-000902':'Phakkhawat Phayakkha',
            'LAWN0383':'Sumet  Theemok',
            'LAWN0384':'Panadda  Sakaekhum',
            'TF-000903':'Tinna  Hawan',
            'TF-000904':'Audchara  Krasaetharm',
            'TF-000905':'Nantaphong   Chanachai',
            'LO000845':'Sulkiflee yangon',
            'LO000848':'Methawalai khunkaewmadan',
            'LO000849':'Thanakrit kanlom',
            'LO000850':'Chinnapat kaewsuwan',
            'LANW0339':'Ratchaphong  Bunprasoet',
            'LAWN0385':'Keeratiya  Yutimit',
            'LAWN0386':'Samatchaya  Paleepod',
            'LAWN0387':'Dennapha  Changchak',
            'LAWN0388':'Wannapapha  Pawang',
            'LAWN0389':'Aekkarat  Phutphat',
            'LAWN0390':'Sirisak  Namsao',
            'LO000863':'Ni-alif sapae-ing',
            'LO000864':'Abdulhakim munoh',
            'LO000865':'Sirinya thumtong',
            'LO000866':'Anurut namsad',
            'LO000867':'Sarocha mueanmaen',
            'LO000868':'Tanakron sribut',
            'LO000869':'Nainapa chaiyakhet',
            'LO000870':'Pintip pimakson',
            'LO000871':'Pankorn narksiri',
            'TF-000937':'Atthasit Ruenphirom',
            'TF-000939':'Nathi  Yimcharoen',
            'TF-000940':'Danuphat  Nansap',
            'TF-000941':'Surachai Mangmee',
            'TF-000942':'Narumon Komood',
            'TF-000943':'Sutthida Somphong',
            'TF-000944':'Panida Somphong',
            'TF-000945':'Pipat Toart',
            'LAWN0391':'Panthita  Thuphom',
            'LAWN0392':'Waewdaw  Srisang',
            'LAWN0393':'Sasina  Suwan',
            'LAWN0394':'Sawai  Liamchoi',
            'LAWN0395':'Aekkarin  Thongkawe',
            'LO000875':'Piyapron kampimool',
            'LO000876':'Adison thungklang',
            'LO000877':'Soros methakunlachart',
            'LO000878':'Prasit treewisut',
            'LO000879':'Natkamol treewisut',
            'TF-000948':'Suppapon Badinyos',
            'LAWN0396':'Tawan  Thakiang',
            'LAWN0397':'Songphon  Phooyafa',
            'LAWN0398':'Kiartibadint  Saisri',
            'LAWN0399':'Wichai  Onsee',
            'LAWN0400':'Supaporn  Sucharitrak',
            'LAWN0401':'Aree  Buachum',
            'LAWN0402':'Kamornrat  Pensuk',
            'TF-000951':'Orasa  Saykaew',
            'TF-000952':'Sheranut Kanrakkiat',
            'TF-000953':'Wanchai Naprakon',
            'LO000883':'Jutiphong kongjinda',
            'LO000884':'Siwakorn rottanawong',
            'LAWN0403':'Songkod  Kanteerat',
            'LAWN0404':'Chatuporn  Sawatdee',
            'LAWN0405':'Oanthika  Inthama',
            'LAWN0406':'Phandira  Laosikhu',
            'LO000887':'Pudsadee sattanan',
            'LO000888':'Sirinnapha todok',
            'TF-000954':'Jirawan Jundilok',
            'TF-000955':'Donlaya Sudajan',
            'TF-000956':'Sanya marunab',
            'LO000889':'Yupin sarasuk',
            'LO000890':'Thipphawan sunrokha',
            'LO000891':'Phinicha khrueakhwan',
            'LO000892':'Kongkidakorn wisatha',
            'LO000893':'Natthayakon chuaijantuek',
            'LO000894':'Atthapon marthong',
            'LAWN0407':'Yutthana. Manorat',
            'LAWN0408':'Wansongpol  Doungcheun',
            'LAWN0409':'Natthachai  Chaksri',
            'LAWN0410':'Wipharat  Chanthawet',
            'LAWN0411':'Saytan  Ninmungkon',
            'LAWN0412':'Sunisa  Phaikaeo',
            'TF-000958':'Janjai Jaikaew',
            'TF-000959':'Sakaoduean Chueachot',
            'TF-000960':'Wanfateemah Kasaw',
            'TF-000961':'Sitimusliha Naming',
            'TF-000962':'Natasa Mamah',
            'TF-000963':'Rofee-i  Yunuh',
            'TF-000964':'Khathawut Sriphitak',
            'LO000895':'Weeraphat booncharoen',
            'LO000896':'Asuwan hamee',
            'LO000897':'Jariya wongpaskiang',
            'LO000898':'Pakpoom rattannapan',
            'LO000899':'Theeraphat meechiya',
            'LO000900':'Pawaniad sukdee',
            'TF-000966':'Narumon Aem-ngam',
            'TF-000967':'Chutikan Majanla',
            'TF-000968':'Rapeephan Sonpanya',
            'TF-000969':'Anuwat Sonpanya',
            'TF-000970':'Adisorn Kaewseung',
             'JOB8-001':'Wipaporn pang',
            'JOB8-002':'Nipapoen thammalee',
            'JOB8-003':'Malichan niwongsa',
            'JOB8-004':'Kanjanaporn rodsamphao',
            'JOB8-005':'Danai camla',
            'JOB8-006':'Arunya camra',
            'JOB8-007':'Teerachat srikongphet',
            'JOB8-008':'Chamnian moolsungnoen',
            'JOB8-009':'Choochat sangkhwang',
            'JOB8-010':'Wanpen ampun',
            'JOB8-011':'Kriangsak chaowai',
            'JOB8-012':'Phonsuda sophap',
            'JOB8-013':'Komin kunwimol',
            'JOB8-014':'Chaowalit chammee',
            'JOB8-015':'Anawin meeprakon',
            'JOB8-016':'Teerapat boonlert',
            'JOB8-017':'Warat chaipipat',
            'JOB8-018':'Duangprasert duangkam',
            'JOB8-019':'Rujipa jirakul',
            'JOB8-020':'Chakraphong wangsawat',
            'JOB8-021':'Wannisa naimsudchai',
            'JOB8-022':'Niracha yokong',
            'JOB8-023':'Phatthanasak sepsuk',
            'JOB8-024':'Wanisa saengtae',
            'JOB8-025':'Songkran yathongchai',
            'JOB8-026':'Nattawut matwang',
            'JOB8-027':'Wisawa phumikhai',
            'JOB8-028':'Charainya somsuk',
            'JOB8-029':'Wathinee pensri',
            'JOB8-030':'Kritsana maneephak',
            'JOB8-031':'Piyawat treechai',
            'JOB8-032':'Peerapat phatthip',
            'JOB8-033':'Mintada boksanthia',
            'JOB8-034':'Supaporn wongchangchue',
            'JOB8-035':'Rujira pilasapa',
            'JOB8-036':'Chalermkwan daengkhan',
            'JOB8-037':'Natthanon meesat',
};

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
        <td>${userAPI[rec.User] || ''}</td>
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
renderTable();
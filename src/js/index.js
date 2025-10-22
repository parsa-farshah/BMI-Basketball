let db = [];

let _nameInp = document.querySelector("#name");
let _heightInp = document.querySelector("#height");
let _btnSubmit = document.querySelector("#btn");
let _error = document.querySelector("#error");
let _errorName = document.querySelector("#errorName");
let _errorHeight = document.querySelector("#errorHeight");
let _errorWeight = document.querySelector("#errorWeight");
let _errorPercent = document.querySelector("#errorPercent");

let _weightInp = document.querySelector("#weight");
let _3shotInp = document.querySelector("#shot");
let _driblleInp = document.querySelector("#drible");
let _layupInp = document.querySelector("#layup");
let _freethrowInp = document.querySelector("#freethrow");
let _defenseInp = document.querySelector("#defense");

let _analysResDiv = document.querySelector("#analysRes");
let flag = 10;
let _nameVal;

// set lostorage
let localStorageStatus = localStorage.getItem("dataBase");
if (localStorageStatus) {
  db = [...JSON.parse(localStorageStatus)];
  window.db = db;
} else {
  db = [];
  window.db = db;
}

// default with localstorage
db.map((item) => {
  _analysResDiv.innerHTML += `<div
            class="w-[40%] md:w-[20%] bg-[#101111] hover:scale-110 duration-500 border border-[#201f20] py-5 rounded-2xl"
          >
            <!-- مشخصات -->
            <div class="jalayerMd flex justify-between px-5 py-3">
              <div>
                <span class="text-2xl">${item[0]}</span>
                <h6>قد : ${item[1]}</h6>
                <h5>وزن : ${item[2]}</h5>
              </div>
              <img
                class="w-[70px] h-[70px] object-cover"
                src="src/images/basketballMan.png"
                alt=""
              />
            </div>
            <!-- bmi -->
            <div class="flex items-center justify-between px-5">
              <div
                class="w-[50%] h-[10px] bg-[#1d1c1d] rounded-2xl relative overflow-hidden"
              >
                <div
                  class="absolute top-0 left-0 bg-[#e67616]  h-full"
                  style="width: ${item[8] * 2}%"
                ></div>
              </div>
              <span dir="ltr" class="w-[50%]">BMI ${item[8]}</span>
            </div>
            <!-- body type -->
            <h4 class="px-5 mt-2">${item[9]}</h4>
            <!-- post player -->
            <div class="mt-4 px-5">
              <h4 dir="ltr" class="text-[#ffcd79] text-sm">${item[10]}</h4>
              <!-- 3point -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">3 امتیازی</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${item[3]}%"
                    class="absolute top-0 left-0 bg-[#e67616]  h-full"
                  ></div>
                </div>
              </div>
              <!-- drible -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">دریبل</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${item[4]}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- layup -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">لی آپ</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${item[5]}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- free throw -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">پنالتی</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${item[6]}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- defense -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">ذفاع</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${item[7]}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- end 3point -->
            </div>
          </div>`;
});

console.log(localStorageStatus);
console.log(db);

// console.log(localStorageStatus[2]);



_btnSubmit.addEventListener("click", () => {
  flag = 10;

  _nameVal = _nameInp.value;
  _heightVal = _heightInp.value;
  _weightVal = _weightInp.value;
  _3shotVal = _3shotInp.value;
  _dribleVal = _driblleInp.value;
  _layupVal = _layupInp.value;
  _freethrowVal = _freethrowInp.value;
  _defenseVal = _defenseInp.value;

  console.log(_nameVal.search(/[0-9]/));

  console.log(_nameVal);

  // داخل سام نتونه عدد بنویسه

  if (_nameVal.search(/[0-9]/) == -1) {
    flag = 0;
  } else {
    flag = 2;
  }

  //   داخل قد نتونه حروف بنویسه
  if (_heightVal.search(/[a-z]/i) == -1) {
    flag = 0;
  } else {
    flag = 3;
  }

  //   داخل وزن نتونه حروف بنویسه
  if (_weightVal.search(/[a-z]/i) == -1) {
    flag = 0;
  } else {
    flag = 4;
  }

  //   داخل وزن نتونه حروف بنویسه
  if (
    _3shotVal.search(/[a-z]/i) == -1 &&
    _dribleVal.search(/[a-z]/i) == -1 &&
    _layupVal.search(/[a-z]/i) == -1 &&
    _freethrowVal.search(/[a-z]/i) == -1 &&
    _defenseVal.search(/[a-z]/i) == -1
  ) {
    flag = 0;
  } else {
    flag = 5;
  }

  //   خالی نباشه اینپوت ها
  if (
    _nameVal == "" ||
    _heightVal == "" ||
    _weightVal == "" ||
    _3shotVal == "" ||
    _dribleVal == "" ||
    _layupVal == "" ||
    _defenseVal == ""
  ) {
    flag = 1;
  }

  if (flag == 1) {
    _error.classList.remove("hidden");
    _error.classList.add("flex");
  } else if (flag == 2) {
    _errorName.classList.remove("hidden");
    _errorName.classList.add("flex");
  } else if (flag == 3) {
    _errorHeight.classList.remove("hidden");
    _errorHeight.classList.add("flex");
  } else if (flag == 4) {
    _errorWeight.classList.remove("hidden");
    _errorWeight.classList.add("flex");
  } else if (flag == 5) {
    _errorPercent.classList.remove("hidden");
    _errorPercent.classList.add("flex");
  } else {
    _error.classList.add("hidden");
    _errorName.classList.add("hidden");
    _errorHeight.classList.add("hidden");
    _errorWeight.classList.add("hidden");
    _errorPercent.classList.add("hidden");
    let bodyType;
    let _bmi = parseInt(_weightVal / (_heightVal / 100) ** 2);

    let playerRole;

    if (_3shotVal >= 75) {
      playerRole = "شوتینگ گارد (Shooting Guard)";
    } else if (_dribleVal >= 70) {
      playerRole = "گارد راس (Point Guard)";
    } else if (_layupVal >= 60 && _defenseVal >= 50) {
      playerRole = "اسمال فوروارد (Small Forward)";
    } else if (_defenseVal >= 65 && _heightVal >= 180 && _heightVal < 200) {
      playerRole = "پاور فوروارد (Power Forward)";
    } else if (_defenseVal >= 70 && _heightVal >= 200) {
      playerRole = "سنتر (Center)";
    } else {
      playerRole = " به درد بسکتبال نمیخورید 😅";
    }

    if (_bmi < 18.5) {
      bodyType = "لاغر";
    }
    if (18.5 <= _bmi && _bmi <= 24.9) {
      bodyType = "نرمال";
    }
    if (25 <= _bmi && _bmi <= 29.9) {
      bodyType = "اضافه وزن";
    }
    if (_bmi >= 30) {
      bodyType = "چاق";
    }

    let makeAnalys = `
                  <div
            class="w-[45%] md:w-[20%] hover:scale-110 duration-500  bg-[#101111] border border-[#201f20] py-5 rounded-2xl"
          >
            <!-- مشخصات -->
            <div class="jalayerMd flex justify-between px-5 py-3">
              <div>
                <span class="text-2xl">${_nameVal}</span>
                <h6>قد : ${_heightVal}</h6>
                <h5>وزن : ${_weightVal}</h5>
              </div>
              <img
                class="w-[70px] h-[70px] object-cover"
                src="src/images/basketballMan.png"
                alt=""
              />
            </div>
            <!-- bmi -->
            <div class="flex items-center justify-between px-5">
              <div
                class="w-[50%] h-[10px] bg-[#1d1c1d] rounded-2xl relative overflow-hidden"
              >
                <div
                  class="absolute top-0 left-0 bg-[#e67616]  h-full"
                  style="width: ${_bmi * 2}%"
                ></div>
              </div>
              <span dir="ltr" class="w-[50%]">BMI ${_bmi}</span>
            </div>
            <!-- body type -->
            <h4 class="px-5 mt-2">${bodyType}</h4>
            <!-- post player -->
            <div class="mt-4 px-5">
              <h4 dir="ltr" class="text-[#ffcd79] text-sm">${playerRole}</h4>
              <!-- 3point -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">3 امتیازی</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${_3shotVal}%"
                    class="absolute top-0 left-0 bg-[#e67616]  h-full"
                  ></div>
                </div>
              </div>
              <!-- drible -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">دریبل</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${_dribleVal}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- layup -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">لی آپ</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${_layupVal}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- free throw -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">پنالتی</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${_freethrowVal}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- defense -->
              <div class="flex items-center justify-between gap-2 mt-3">
                <span class="w-[50%] text-[12px]">ذفاع</span>
                <div
                  class="w-[50%] bg-[#1d1c1d] h-[10px] rounded-2xl relative overflow-hidden"
                >
                  <div style="width: ${_defenseVal}%"
                    class="absolute top-0 left-0 bg-[#e67616] w-[50%] h-full"
                  ></div>
                </div>
              </div>
              <!-- end 3point -->
            </div>
          </div>
    `;

    console.log(bodyType);
    console.log(_bmi);

    _analysResDiv.innerHTML += makeAnalys;

    let dataPlayer = [
      _nameVal,
      _heightVal,
      _weightVal,
      _3shotVal,
      _dribleVal,
      _layupVal,
      _freethrowVal,
      _defenseVal,
      _bmi,
      bodyType,
      playerRole,
    ];

    db.push(dataPlayer);

    localStorage.setItem("dataBase", JSON.stringify(db));

    _nameInp.value = "";
    _heightInp.value = "";
    _weightInp.value = "";
    _3shotInp.value = "";
    _driblleInp.value = "";
    _layupInp.value = "";
    _freethrowInp.value = "";
    _defenseInp.value = "";
  }
});

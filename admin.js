function loadJsonPackage() {
  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  // open
  xhr.open("GET", "data.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      var customize = document.querySelector("#changeable");
      let output = "";
      customer[0].forEach((el) => {
        output += ` <div  data-aos="zoom-in-up"  data-aos-delay="100"  data-aos-duration="900">
                                   <div>
                                       <img width="100%" height="100%"  src=${el.img}   alt="high definition makeup package">
                                   </div>
                                   <h3>${el.name}</h3>
                                   <div>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(249,195,82,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path></svg>
                                       <div class="price_input">
                                       <span  class="price">${el.price}</span>     
                                       <button class="editbtn">Edit</button>
                                      </div>
                                   </div>
                                   <button class="addToList" id=${el.id}>Save</button>
                                  
                               </div>`;
      });
      customize.innerHTML = output;

      const editbtn = document.querySelectorAll(".editbtn");

      editbtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let change = `<div class="user_change">
       <input type="number">
       </div> `;
          e.target.parentElement.children[0].innerHTML = change;
        });
      });

      const user_change = document.querySelectorAll(".editbtn");
      user_change.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.target.parentElement.children[0].children[0].children[0].addEventListener(
            "keyup",
            (e) => {
              userChangeValue(e.target.value);
            }
          );
        });
      });

      const savebtn = document.querySelectorAll(".addToList");
      function userChangeValue(value) {
        savebtn.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.target.previousElementSibling.children[1].children[0].innerHTML =
              value;
            updateJson(e.target.id, value);
          });
        });
      }

      function updateJson(id, value) {
        fetch(`http://localhost:3000/0/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: value }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
    }
  };

  xhr.send();
}

function loadJsonCustomize() {
  // create xhr Object
  const xhr = new XMLHttpRequest();

  // xhr Open
  xhr.open("GET", "data.json", true);

  // xhr Onload
  xhr.onload = function () {
    if (this.status === 200) {
      const package = JSON.parse(this.responseText);
      var packagezie = document.querySelector("#changeCustomize");
      let output = "";
      package[1].forEach((el) => {
        output += `
                      <div  data-aos="zoom-in-up"  data-aos-delay="100"  data-aos-duration="900">
                                   <div>
                                       <img width="100%" height="100%"  src=${el.img}   alt="high definition makeup package">
                                   </div>
                                   <h3>${el.name}</h3>
                                   <div>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(249,195,82,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path></svg>
                                       <div class="price_input">
                                       <span  class="price">${el.price}</span>     
                                       <button class="edit">Edit</button>
                                      </div>
                                   </div>
                                   <button class="add" id=${el.id}>Save</button>
                                  
                               </div>
                 `;
      });
      packagezie.innerHTML = output;

      const editbtn = document.querySelectorAll(".edit");
      editbtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let change = `<div class="user_change">
       <input type="number">
       </div>`;
          e.target.parentElement.children[0].innerHTML = change;
        });
      });

      const user_change = document.querySelectorAll(".edit");
      user_change.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.target.parentElement.children[0].children[0].children[0].addEventListener(
            "keyup",
            (e) => {
              userChangeValue(e.target.value);
            }
          );
        });
      });

      const savebtn = document.querySelectorAll(".add");
      console.log(savebtn);
      function userChangeValue(value) {
        savebtn.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.target.previousElementSibling.children[1].children[0].innerHTML =
              value;
            update(e.target.id, value);
          });
        });
      }

      function update(id, value) {
        console.log(id);
        fetch(`http://localhost:3000/1/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: value }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
    }
  };
  // xhr send
  xhr.send();
}

loadJsonCustomize();
loadJsonPackage();
AOS.init();

//  json-server --watch data.json --port 3000
// npm install -g json-server

window.addEventListener("DOMContentLoaded", function () {
  function setMainHeight() {
    const headerHeight = document.querySelector("header").offsetHeight;
    const main = document.querySelector("main");
    const footerHeight = document.querySelector("footer").offsetHeight;

    main.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;
  }
  setMainHeight();

  function stepperTabHandler() {
    const tabBtn = document.querySelectorAll(".stepper__list__item");
    const stepperContents = document.querySelectorAll(".stepper__content");

    stepperContents.forEach((content, index) => {
      const gotoBtn = content.querySelector("button");

      if (gotoBtn !== null) {
        gotoBtn.addEventListener("click", function (e) {
          e.preventDefault();
          // const btn = this.dataset.goto;

          if (content.classList.contains("active")) {
            tabBtn[index].classList.remove("active");
            tabBtn[index].nextElementSibling.classList.add("active");

            content.classList.remove("active");
            content.nextElementSibling.classList.add("active");
          }
        });
      }
    });
  }
  stepperTabHandler();

  function fileUploadHandler() {
    const fileUpload = document.getElementsByClassName("file__upload")[0];
    const dragMsg = document.getElementsByClassName("drag-msg")[0];
    const dragFile = document.getElementById("drag-file");
    let file;
    // console.log(fileUpload);

    dragFile.addEventListener("change", function () {
      // console.log(this.files);
      file = this.files[0];
      showFile();
    });

    /* drag over */
    fileUpload.addEventListener("dragover", function (e) {
      e.preventDefault();
      // console.log("Drag OVER");
      fileUpload.classList.add("drag-enter");
      dragMsg.innerHTML = "Release to upload image.";
    });

    /* drag leave */
    fileUpload.addEventListener("dragleave", function () {
      // console.log("Drag LEAVE");
      fileUpload.classList.remove("drag-enter");
      dragMsg.innerHTML = "Drag and drop an image of your ID here";
    });

    /* drop */
    fileUpload.addEventListener("drop", function (e) {
      e.preventDefault();
      // console.log('Drop');
      file = e.dataTransfer.files[0];
      showFile();
    });

    function showFile() {
      let acceptedExtention = ["image/jpeg", "image/jpg", "image/png"];
      if (acceptedExtention.includes(file.type)) {
        //   console.log("Accepted");
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let fileUrl = fileReader.result;
          // console.log(fileUrl);

          let img = `<img src=${fileUrl} alt="Image">`;
          fileUpload.innerHTML = img;
        };
        fileReader.readAsDataURL(file);
      } else {
        console.log("Rejected");
        alert("This is not an Image File!");
        fileUpload.classList.remove("drag-enter");
        dragMsg.innerHTML = "Drag and drop an image of your ID here";
      }
    }
  }
  fileUploadHandler();
});

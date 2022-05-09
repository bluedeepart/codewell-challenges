window.addEventListener("DOMContentLoaded", function () {
  const showResourceData = async (resourseFolder, resourcePath, root) => {
    const response = await fetch(
      `/codewell-challenges/2022/contrast-directory/data/${resourcePath}`
    );
    console.log(response);
    const allData = await response.json();
    const rootHtml = document.getElementById(root);
    for (let d in allData) {
    //   console.log(allData[d]);
      let output = `<div class="col-lg-4 col-md-6 col-sm-12">
             <div class="card">
                 <div class="card-body">
                     <div><img src="images/Resources/${resourseFolder}/${allData[d].Icon}" alt="google" class="mb-2">
                     <h3>${allData[d].Title}</h3>
                     <p>${allData[d].Description}</p></div>
                     <p class="mb-0"><strong><a href=${allData[d].Link} target="_blank" rel="noopener noreferrer">Visit Resource →</a></strong></p>
                 </div>
             </div>
         </div>`;
      rootHtml.innerHTML += output;
    }
  };

  showResourceData("Fonts","fonts.json", "fontResourse");
  showResourceData("Mockups","mockups.json", "mockupResourse");
  showResourceData("Illustrations","illustrations.json", "illustrationResourse");
  showResourceData("Icons","icons.json", "iconResourse");
});

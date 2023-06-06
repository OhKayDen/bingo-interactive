var checkboxes = document.getElementsByName("option");

function changeImage(checkbox) {
  if (checkbox.checked) {
    checkboxes.forEach(function (element) {
      if (element !== checkbox) {
        element.checked = false;
      }
    });

    var selectedImage = document.getElementById("selected-image");
    var imageName = checkbox.value + ".png";
    selectedImage.src = imageName;
  }
}

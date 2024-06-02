const popup = document.querySelector(".popup"),
  close = popup.querySelector(".close"),
  field = popup.querySelector(".field"),
  input = field.querySelector("input"),
  copy = field.querySelector("button");

$(document).ready(function () {
  $("#formurl").on("submit", function (event) {
    event.preventDefault();

    var longurl = $('input[name="longurl"]').val();
    var customurl = $('input[name="customurl"]').val();

    $.ajax({
      url: "/generate",
      type: "post",
      data: { longurl: longurl, customurl: customurl },
      success: function (data) {
        // Set the input value to the short URL
        input.value = data.short_url;
        // Trigger the view button click event
        popup.classList.toggle("show");
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});

close.onclick = () => {
  popup.classList.toggle("show");
};

copy.onclick = () => {
  input.select();
  if (document.execCommand("copy")) {
    field.classList.add("active");
    copy.innerText = "Copied";
    setTimeout(() => {
      window.getSelection().removeAllRanges();
      field.classList.remove("active");
      copy.innerText = "Copy";
    }, 3000);
  }
};

$(document).ready(function () {
  $("#formurl").on("submit", function (event) {
    event.preventDefault();

    var longurl = $('input[name="longurl"]').val();
    var customurl = $('input[name="customurl"]').val();

    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (err) {
        return false;
      }
    }

    if (!isValidUrl(longurl)) {
      alert("Invalid URL");
      return;
    }

    $.ajax({
      url: "/generate",
      type: "post",
      data: { longurl: longurl, customurl: customurl },
      success: function (data) {
        input.value = data.short_url;

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

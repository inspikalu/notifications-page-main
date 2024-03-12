const markAsRead = document.querySelector(".markAsRead");
const unread = document.querySelectorAll(".notification__body__item.unread");
const badge = document.querySelector(".badge");

badge.innerHTML = unread.length;

markAsRead.addEventListener("click", () => {
  unread.forEach(function (item, index) {
    item.classList.remove("unread");
  });
  badge.style.display = "none";
});

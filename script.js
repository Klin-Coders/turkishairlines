let openChildTab = 1;
let openParentTab = "tab1";

function handleContentSwap(e) {
  // ensure ID is never undefined
  const id = e.target.parentNode.id ? e.target.parentNode.id : e.target.id;

  //   remove previous content
  document.getElementById(openChildTab).classList.remove("block");
  document.getElementById(openChildTab).classList.add("hidden");
  document.getElementById(openParentTab).classList.remove("text-red-500");
  document.getElementById(openParentTab).classList.add("text-gray-600");

  // derive the id, add new content and set current open tab
  const childId = id.split("tab")[1];
  document.getElementById(childId).classList.remove("hidden");
  document.getElementById(childId).classList.add("block");
  document.getElementById(id).classList.add("text-red-500");
  document.getElementById(id).classList.remove("text-gray-600");
  openChildTab = childId;
  openParentTab = id;
}

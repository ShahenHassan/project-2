const nursiArray = [{
        id: 1,
        title: "بریسکەکان",
        Url: "image/nursi.jpg",
    },
    {
        id: 2,
        title: "پاشبەندەکان",
        Url: "image/nursi.jpg",
    },
    {
        id: 3,
        title: "مەکتووبات",
        Url: "image/nursi.jpg",
    },
    {
        id: 4,
        title: "وتەکان",
        Url: "image/nursi.jpg",
    },
];

let text = ``;

nursiArray.forEach(myfunction);

function myfunction(element) {
    text =
        text +
        ` <article class="card">
    <div>
      <img src="${element.Url}">
      </div>
      <div>
      <h3>${element.title}</h3>
     
      </div>
    </article>
  `;
}
const Cards = document.querySelector(".nursi-books");

Cards.innerHTML = text;
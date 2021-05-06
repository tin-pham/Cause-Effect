document.addEventListener('DOMContentLoaded', () => {
  const infos = [
    {
      name: 'Pham Bao Tin',
      age: 19,
      city: 'Can Tho',
      street: '3/2',
      birthday: 'June 6th',
      lorem: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              dignissimos rerum nobis quam impedit voluptatum debitis accusamus
              eos voluptatem sed!`,
      id: 1,
    },

    {
      name: 'Nguyen Chi Khanh',
      age: 19,
      city: 'Can Tho',
      street: '3/2',
      birthday: 'July 5th',
      lorem: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi dignissimos exercitationem quibusdam expedita consectetur, quam placeat nobis vitae distinctio in ratione mollitia laboriosam impedit tempore tempora obcaecati provident laudantium?`,
      id: 2,
    },

    {
      name: 'Nguyen Truong Vu',
      age: 18,
      city: 'Can Tho',
      street: '3/2',
      birthday: 'July 19th',
      lorem: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, neque eveniet doloremque alias modi quae odit officiis quis asperiores soluta earum perspiciatis eaque, qui deleniti ex exercitationem amet consequuntur harum.`,
      id: 3,
    },

    {
      name: 'Nguyen Van Hieu',
      age: 19,
      city: 'Can Tho',
      street: '3/2',
      birthday: '21th January',
      lorem: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia praesentium dignissimos qui perferendis quos dolore, earum inventore fuga similique. Consequuntur repudiandae vitae fugit distinctio corrupti sed repellendus! Consectetur, consequatur?`,
      id: 4,
    },

    {
      name: 'Nguyen Gia Huy',
      age: 19,
      city: 'Can Tho',
      street: 'Nguyen Van Cu',
      birthday: '25th June',
      lorem: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus, cumque saepe ea expedita distinctio ipsa. Maiores nemo ad velit sequi quas fugiat dolorum voluptatum eum excepturi? Non, nobis quibusdam?`,
      id: 5,
    },

    {
      name: 'Pham Bao Huy',
      age: 12,
      city: 'An Giang',
      street: 'Khanh An',
      birthday: `21th July`,
      lorem: `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi velit, quos amet rem aperiam voluptas ab veritatis voluptates incidunt, consequuntur qui nulla inventore quae saepe deserunt nesciunt dolore officia.`,
      id: 6,
    },
  ];

  // Display Text
  function displayText(item) {
    const main = document.querySelector('main');
    main.innerHTML = `<h1>Detail</h1>
        <h2>Full Name: <span>${item.name}</span></h2>
          <h2>Age: <span>${item.age}</span></h2>
          <h2>City: <span>${item.city}</span></h2>
          <h2>Street: <span>${item.street}</span></h2>
          <h2>BirthDay: <span>${item.birthday}</span></h2>
          <h2>Telephone: <span>0xxxxxxxx</span></h2>
          <h2>
            Info:
            <span
              >${item.lorem}</span
            >
          </h2>`;
  }

  // DOM: Links
  const links = document.querySelectorAll('[data-id]');
  const infoId = infos.map((item) => {
    return item.id;
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // console.log(e.currentTarget.dataset.id);
      let currentLink = e.currentTarget.dataset.id;
      let text = infos.filter((info) => {
        if (info.id == currentLink) {
          return info;
        }
      });
      displayText(text[0]);
    });
  });
});

let slider = document.querySelectorAll(".slider__banner")
let index = 0;
let sliderBg = document.querySelector(".slider-banner");
let itemList = document.querySelector(".item-list");
let cardBanner = document.querySelector(".card-banner")
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let bgColor = [
    "#f53357",
    "#9F6ACB",
    "#F76B0E",
    "#2883FE",
    " #01AE74 "
]
const product = [
    {
        item: "item1",
        name: "kéo",
        url: "https://my-live-02.slatic.net/original/3375feb4d2a6fe7a547c1a135b3af02c.jpg",
        content: "this is the kéo bạn có thể mua được ở bất kì shop nào",
        price: "15.000VND",
        oldPrice: "40.000 VND"
    },
    {
        item: "item2",
        name: "dao",
        url: "https://vn-live-01.slatic.net/p/0b879c440bbc4e9a48807b7c1c63cddc.jpg_200x200q90.jpg_.webp",
        content: "đây là cái dao",
        price: "65.000 VND",
        oldPrice: "70.000.000VND"

    },
    {
        item: "item3",
        name: "bút",
        url: "https://vn-live-01.slatic.net/p/8a9385665cd709bda13d200b51b49acc.jpg_200x200q90.jpg_.webp",
        content: "đây là cái bút",
        price: "20.000 VND",
        oldPrice: "60.000VND"

    },
    {
        item: "item3",
        name: "xe máy",
        url: "https://vn-live-01.slatic.net/p/dcdfd0d0f38d2927e7cbd48156957fa2.jpg_200x200q90.jpg_.webp",
        content: "xe máy hơi đắt coi chừng mua lố",
        price: "60.000.000 VND",
        oldPrice: "65.000.000 VND"

    },
    {
        item: "item4",
        name: "xịt hơi cay",
        url: "https://vn-live-01.slatic.net/p/7f22648fe287641cbc367270679e13ff.jpg_200x200q90.jpg_.webp",
        content: "this is the kéo bạn có thể mua được ở bất kì shop nào",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    }, {
        item: "item5",
        name: "mũ bảo hiểm",
        url: "https://vn-live-01.slatic.net/p/c19f1edf27689e486f1996ce3297a057.jpg_200x200q90.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "160.000 VND",
        oldPrice: "350.000VND"
    },
    {
        item: "item6",
        name: "đèn led dây đôi",
        url: "https://vn-test-11.slatic.net/p/1a6a40856ed1ef358b4c1225a92c3c42.jpg_200x200Q100.jpg_.webp",
        content: "dây led 2m ",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
    {
        item: "item7",
        name: "thước dây inox",
        url: "https://vn-test-11.slatic.net/p/8ee0893fdaf9e95fdecc779144c0ac9b.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "250.000VND"

    },
    {
        item: "item8",
        name: "Móc khóa",
        url: "https://vn-test-11.slatic.net/original/fc995ccbb50ae2087e961139a2bf7291.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "40.000 VND",
        oldPrice: "120.000VND"
    },
    {
        item: "item9",
        name: "Đồng Hồ Led",
        url: "https://vn-test-11.slatic.net/p/483aac8e7add6c59344747f99b252912.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
    {
        item: "item10",
        name: "Áo nỉ",
        url: "https://vn-test-11.slatic.net/p/a4b11c1a6704c6b2a0284a0d00dbe2d5.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
    {
        item: "item11",
        name: "Sạc đế",
        url: "https://vn-test-11.slatic.net/p/eb13e5aa2b2b02e8310249d3e1dff05d.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
    {
        item: "item12",
        name: "Dụng Cụ Na Đăng",
        url: "https://vn-test-11.slatic.net/p/428d38441760e884153c08153cc9df67.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
     {
        item: "item12",
        name: "Sạc Đa Năng",
        url: "https://vn-test-11.slatic.net/p/146124877d1fde6376cc4738a60030d0.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "160.000 VND",
        oldPrice: "450.000VND"
    },
     {
        item: "item12",
        name: "Sữa Tắm",
        url: "https://vn-test-11.slatic.net/p/3719364889f23bda80cf32187181751e.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
     {
        item: "item12",
        name: "Máy uốn tóc",
        url: "https://vn-test-11.slatic.net/p/mdc/0986f98fc74349abd6086a2bb989f929.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
     {
        item: "item12",
        name: "bản Lề Lắp Tường",
        url: "https://vn-test-11.slatic.net/p/b09a298feace5ccb3a50850fa0ecaa71.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "650.000 VND",
        oldPrice: "1550.000VND"
    },
     {
        item: "item12",
        name: "Kem Dưỡng Da",
        url: "https://vn-test-11.slatic.net/p/52629feba1cb75a43fbb60f62503cb99.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
     {
        item: "item12",
        name: "Nhẫn Cặp",
        url: "https://vn-test-11.slatic.net/p/ea9db8fc47b6cacc9284c4a4470ad172.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    },
     {
        item: "item12",
        name: "Sữa Tắm Trắng",
        url: "https://vn-test-11.slatic.net/p/5566c3424b85a6838d8a4eaba6e06998.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "60.000 VND",
        oldPrice: "150.000VND"
    }
    ,
     {
        item: "item12",
        name: "Đầm dạ hội",
        url: "https://vn-test-11.slatic.net/p/ab0b39f68a76df161b498a3885a0ad52.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Đầm dạ hội",
        url: "https://vn-test-11.slatic.net/p/c0856956151bebd438c939e3a568a4bf.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "1 VND",
        oldPrice: "140.000VND"
    }

 ,
     {
        item: "item12",
        name: "Máy bắn vít",
        url: "https://vn-test-11.slatic.net/p/mdc/ebb79c87530a6086b64a5cfc065b82c8.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
 ,
     {
        item: "item12",
        name: "Nước Hoa Nữ",
        url: "https://vn-test-11.slatic.net/p/mdc/1409a20c7f262d4bf187dda6f7de38ef.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
 ,
     {
        item: "item12",
        name: "10 đôi vớ nam",
        url: "https://vn-test-11.slatic.net/p/7c58b6d833a85f526a75641e9cab1703.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Dao cạo mặt",
        url: "https://vn-test-11.slatic.net/p/23a216ef37f88c381ebe92a2b4f2b913.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Rubik 3*3",
        url: "https://vn-test-11.slatic.net/p/mdc/2ea3e9fbe640d43e0e5172edd86debf1.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Dụng cụ bỏ túi",
        url: "https://my-live-02.slatic.net/p/c833c8e943d55d3888f13a9061004c90.jpg",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Ghế Ăn Dặm Cho Bé",
        url: "https://vn-test-11.slatic.net/p/4/ghe-an-dam-viet-nhat-cho-be-8306-78322543-5975a00274b09b392243623a079705ba-catalog.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Nước Hoa Nữ",
        url: "https://vn-test-11.slatic.net/p/mdc/1409a20c7f262d4bf187dda6f7de38ef.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Móc Treo Vật Dụng Nhỏ",
        url: "https://vn-test-11.slatic.net/p/mdc/f2fa415afefa366b6f8837aa748eb14b.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "140.000VND"
    }
     ,
     {
        item: "item12",
        name: "2 áo thun nam",
        url: "https://vn-test-11.slatic.net/original/4aa05e034d4471a4f1f6185bac734476.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "6550.000 VND",
        oldPrice: "15440.000VND"
    }
     ,
     {
        item: "item12",
        name: "Nhíp Mini",
        url: "https://vn-test-11.slatic.net/p/908eb82c61b852de1c147e3c75761cbc.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "10.000 VND",
        oldPrice: "40.000VND"
    }
     ,
     {
        item: "item12",
        name: "Kéo Mini",
        url: "https://vn-test-11.slatic.net/p/1459f6003c3710d80a74340af4ded224.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "30.000 VND",
        oldPrice: "45.000VND"
    }
     ,
     {
        item: "item12",
        name: "Khay úp đồ ăn cho bé",
        url: "https://vn-test-11.slatic.net/p/mdc/71a4cc5cc0e83c64953d9288021ef7aa.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "140.000VND"
    }
     ,
     {
        item: "item12",
        name: "Táo đổ Hàn Quốc",
        url: "https://vn-test-11.slatic.net/p/mdc/302c02c7e5e27d4648dd693bd85fc61b.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "150.000 VND",
        oldPrice: "340.000VND"
    }

 ,
     {
        item: "item12",
        name: "Bộ chà nồi siêu sạch",
        url: "https://vn-test-11.slatic.net/p/mdc/486b19cea993a60e14e1041a8a8a45aa.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "12.000 VND",
        oldPrice: "40.000VND"
    }

 ,
     {
        item: "item12",
        name: "Bó gối, bảo vệ đầu",
        url: "https://vn-test-11.slatic.net/p/7a1fde07a220ec12d5fa37c414acaf17.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "140.000VND"
    }

 ,
     {
        item: "item12",
        name: "Trà xanh Thái",
        url: "https://vn-test-11.slatic.net/p/5f5cde619f2c4b43ad0c1fcc0d075bf3.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "140.000VND"
    }

 ,
     {
        item: "item12",
        name: "Kem Trắng bao real",
        url: "https://vn-test-11.slatic.net/p/mdc/5678e7f807abf556a09f916c0544f4a3.jpg_200x200Q100.jpg_.webp",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "140.000VND"
    }


 ,
     {
        item: "item12",
        name: "Kẹp Tóc Phong Cách",
        url: "https://my-live-02.slatic.net/p/53bb2acfc0a0d42a9fb0b42a70653f5f.jpg",
        content: "đây là mũ bảo hiểm",
        price: "50.000 VND",
        oldPrice: "140.000VND"
    }






]


function changeSlider() {
    slider[index].style.zIndex = 0;
    slider[index].style.opacity = 0;
    if (index == 4) {
        index = 0;
    } else {
        index++;
    }
    slider[index].style.zIndex = 1;
    slider[index].style.opacity = 1;
    sliderBg.style.backgroundColor = bgColor[index];

}

setInterval(changeSlider, 5000);

function removeItem() {

    if (itemList.style.display === "none") {
        itemList.style.display = "block";
        itemList.style.height = "100%";
    } else {
        itemList.style.display = "none";
        itemList.style.height = "0%";

    }
}

function closeBanner() {
    cardBanner.style.display = "none";
}


/*........................countDown.........................*/
let startMin = Math.floor((Math.random() * 20) + 3);
let seccond = startMin * 60;

function timeCoundown() {
    if (seccond == 0) {
        seccond = startMin * 60;
    }
    let newMinutes = Math.floor(seccond / 60);
    let newSecconds = seccond % 60;
    seccond--;
    if (newSecconds < 10) {
        newSecconds = '0' + newSecconds;
    }
    min.innerHTML = `${newMinutes}`;
    sec.innerHTML = `${newSecconds}`;

}


setInterval(timeCoundown, 1000);
/*................................scrollNavbar.........*/
window.onscroll = function() { scrollFunction() };
let header = document.querySelector(".header")
let searching = document.querySelector(".logo-bar--search_engine")

function scrollFunction() {
    if (document.body.scrollTop > header.offsetHeight - 20 || document.documentElement.scrollTop > header.offsetHeight - 20) {
        header.classList.add("sticky");
        cardBanner.style.display = "none";
    } else {
        header.classList.remove("sticky")
        cardBanner.style.display = "block";
    }
}
/*........................show Up.......................*/
let card_forU = document.querySelector(".card_forU")


/*create loading*/
let newDiv_loading = document.createElement('div');
newDiv_loading.className = ('forU_banner')
card_forU.appendChild(newDiv_loading);
/*............*/
let newDiv_loading2 = document.createElement('div');
newDiv_loading2.className = ('forU_banner')
card_forU.appendChild(newDiv_loading2);
/*...............................show after button........................*/
let seeMore = document.querySelector(".forU");
let button_show_card = document.querySelector(".button")
let elem = document.querySelector(".animate")
let showMore_btn = document.querySelector(".show_card");
let newArr = 0;


/*div banner 1*/
let newDiv_1 = document.createElement('div');
newDiv_1.className = ('forU_banner')
card_forU.appendChild(newDiv_1);
/*div banner 2*/
let newDiv_2 = document.createElement('div');
newDiv_2.className = ('forU_banner')
card_forU.appendChild(newDiv_2);
/*div banner 1*/
let newDiv_3 = document.createElement('div');
newDiv_3.className = ('forU_banner')
card_forU.appendChild(newDiv_3);
/*div banner 1*/
let newDiv_4 = document.createElement('div');
newDiv_4.className = ('forU_banner')
card_forU.appendChild(newDiv_4);
/*tạo 1 tab FORU */
let newflag = 0;



function item_loading() {
    console.log(".................newItem................");

    let randomObject = Math.floor(Math.random() * product.length);
    randomValue=product[randomObject];
    console.log("random:"+randomObject);
    console.log(randomValue)
      console.log("--------------------------");

    console.log("productLength"+ product.length);
      console.log("--------------------------");

    let newText =

        ` 
                                <img src="${randomValue.url}" alt="">
                                <p class="forU_title">
                                   ${randomValue.name}
                                </p>
                                <p class="forU_price">
                                    ${randomValue.price}
                                </p>
                                <p class="forU_origin_price">
                                    ${randomValue.oldPrice}
                                </p>
     
    `
    let remove =product.splice(randomObject, 1)
    console.log(remove)
      console.log("productLength sau khi cat"+ product.length);
    let card = document.createElement('a');
    card.className = ('forU_card item1')
    newDiv_loading.appendChild(card);
    card.innerHTML = newText;
}

item_loading();
item_loading();
item_loading();
item_loading();
item_loading();
item_loading();


function item_loading2() {
    console.log(".................newItem................");

    let randomObject = Math.floor(Math.random() * product.length);
    randomValue=product[randomObject];
    console.log("random:"+randomObject);
    console.log(randomValue)
      console.log("--------------------------");

    console.log("productLength"+ product.length);
      console.log("--------------------------");

    let newText =

        ` 
                                <img src="${randomValue.url}" alt="">
                                <p class="forU_title">
                                   ${randomValue.name}
                                </p>
                                <p class="forU_price">
                                    ${randomValue.price}
                                </p>
                                <p class="forU_origin_price">
                                    ${randomValue.oldPrice}
                                </p>
     
    `
    let remove =product.splice(randomObject, 1)
    console.log(remove)
      console.log("productLength sau khi cat"+ product.length);
    let card = document.createElement('a');
    card.className = ('forU_card item1')
    newDiv_loading2.appendChild(card);
    card.innerHTML = newText;
}

item_loading2();
item_loading2();
item_loading2();
item_loading2();
item_loading2();
item_loading2();

function createForUBanner() {
    newflag++;
    if (newflag == 1) {
        item_1();
        item_1();
        item_1();
        item_1();
        item_1();
        item_1();
    } else if (newflag == 2) {

        item_2();
        item_2();
        item_2();
        item_2();
        item_2();
        item_2();
    }
    else if (newflag == 3) {

        item_3();
        item_3();
        item_3();
        item_3();
        item_3();
        item_3();
    }
    else if (newflag == 4) {

        item_4();
        item_4();
        item_4();
        item_4();
        item_4();
        item_4();
    }

}

function item_1() {
    console.log(".................newItem................");

    let randomObject = Math.floor(Math.random() * product.length);
    randomValue=product[randomObject];
    console.log("random:"+randomObject);
    console.log(randomValue)
      console.log("--------------------------");

    console.log("productLength"+ product.length);
      console.log("--------------------------");

    let newText =

        ` 
                                <img src="${randomValue.url}" alt="">
                                <p class="forU_title">
                                   ${randomValue.name}
                                </p>
                                <p class="forU_price">
                                    ${randomValue.price}
                                </p>
                                <p class="forU_origin_price">
                                    ${randomValue.oldPrice}
                                </p>
     
    `
    let remove =product.splice(randomObject, 1)
    console.log(remove)
      console.log("productLength sau khi cat"+ product.length);
    let card = document.createElement('a');
    card.className = ('forU_card item1')
    newDiv_1.appendChild(card);
    card.innerHTML = newText;
}

function item_2() {
    console.log(".................newItem................");

    let randomObject = Math.floor(Math.random() * product.length);
    randomValue=product[randomObject];
    console.log("random:   "+randomObject);
      console.log("--------------------------");

    console.log("productLength"+ product.length);
      console.log("--------------------------");

    let newText =

        ` 
                                <img src="${randomValue.url}" alt="">
                                <p class="forU_title">
                                   ${randomValue.name}
                                </p>
                                <p class="forU_price">
                                    ${randomValue.price}
                                </p>
                                <p class="forU_origin_price">
                                    ${randomValue.oldPrice}
                                </p>
     
    `
        let remove =product.splice(randomObject, 1)
    console.log(remove)
      console.log("productLength sau khi cat"+ product.length);
    let card = document.createElement('a');
    card.className = ('forU_card item1')
    newDiv_2.appendChild(card);
    card.innerHTML = newText;
}

function item_3() {
   console.log(".................newItem................");

    let randomObject = Math.floor(Math.random() * product.length);
    randomValue=product[randomObject];
    console.log("random:"+randomObject);
      console.log("--------------------------");

    console.log("productLength"+ product.length);
      console.log("--------------------------");

    let newText =

        ` 
                                <img src="${randomValue.url}" alt="">
                                <p class="forU_title">
                                   ${randomValue.name}
                                </p>
                                <p class="forU_price">
                                    ${randomValue.price}
                                </p>
                                <p class="forU_origin_price">
                                    ${randomValue.oldPrice}
                                </p>
     
    `
        let remove =product.splice(randomObject, 1)
    console.log(remove)
      console.log("productLength sau khi cat"+ product.length);
    let card = document.createElement('a');
    card.className = ('forU_card item1')
    newDiv_3.appendChild(card);
    card.innerHTML = newText;
}

function item_4() {
    console.log(".................newItem................");

    let randomObject = Math.floor(Math.random() * product.length);
    randomValue=product[randomObject];
    console.log("random:"+randomObject);
      console.log("--------------------------");

    console.log("productLength"+ product.length);
      console.log("--------------------------");

    let newText =

        ` 
                                <img src="${randomValue.url}" alt="">
                                <p class="forU_title">
                                   ${randomValue.name}
                                </p>
                                <p class="forU_price">
                                    ${randomValue.price}
                                </p>
                                <p class="forU_origin_price">
                                    ${randomValue.oldPrice}
                                </p>
     
    `
        let remove =product.splice(randomObject, 1)
    console.log(remove)
      console.log("productLength sau khi cat"+ product.length);
    let card = document.createElement('a');
    card.className = ('forU_card item1')
    newDiv_4.appendChild(card);
    card.innerHTML = newText;
}

function showMore() {
    newArr++;
    if (newArr < 5) {
        createForUBanner();


    } else {


        showMore_btn.innerHTML = "Bạn Đã Xem Hết Ưu Tiên Dành Cho Mình"
    }

}







function myMove() {
    elem.classList.add('active')
    console.log("da active");
}


elem.addEventListener('animationend', removeTransition);

function removeTransition(e) {

    elem.classList.remove("active")
    console.log("sau do remove active");
    showMore();
}
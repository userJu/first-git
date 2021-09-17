/*해야 할 일
1. 상품 노출시키기
2. 버튼을 눌렀을때 맞는 상품 띄우기

선행해야 하는 일
1. json의 파일 가져오기*/


//상품
function getGoodsFilebyjson(){
    return fetch('goods.json')
    .then(res=> res.json('goods'))
    .then(data => data.goods);
}


function goodsForMain(thing){
    const main = document.querySelector('.rapGoods')
    main.innerHTML = thing.map(divgoods=>makeHTMLcode(divgoods)).join('');
}

function makeHTMLcode(goods){
    return`
        <li class="goods">
            <img src="${goods.image}" alt="image">
            <span class="goodsPrice"> ${goods.price} </span>
        </li>
        `
}

//버튼 활성화시키기
/*해야 할 일
1. 로고를 눌렀을 때는 모든 제품 보여주기
2. 각 buttons를 누르면 그에 맞는 제품 보여주기*/
function letActive(thing){
    const logo = document.querySelector('.mainLogo')
    const button = document.querySelector('.buttons')
    logo.addEventListener('click',() => goodsForMain(thing))
    button.addEventListener('click', event => letButtonsActive(event, thing))
}

function letButtonsActive(event , goods){
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;

    if( key == null || value == null){
        return;
    }goodsForMain(goods.filter(item => item[key] === value));
}


// 상품 노출시키기 + 버튼을 눌렀을 때 상품 띄우기)
getGoodsFilebyjson()
.then(goods => {
    goodsForMain(goods);
    letActive(goods);
})
.catch(console.log())


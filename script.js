const rules = [
{code:"1.1", text:"Образи, приниження", punish:"Попередження"},
{code:"1.2", text:"Нецензурна лексика", punish:"Попередження"},
{code:"1.3", text:"Провокації, розпалювання конфліктів", punish:"Мут 6–12 годин"},
{code:"1.4", text:"Погрози, шантаж", punish:"Мут 12–24 години"},
{code:"1.5", text:"Особисті суперечки у чаті", punish:"Мут 6–12 годин"},
{code:"1.6", text:"Висміювання інших", punish:"Мут 12 годин"},
{code:"1.7", text:"Сарказм, що ображає", punish:"Попередження"},
{code:"1.8", text:"Ігнор попереджень", punish:"Мут 12 годин"},
{code:"1.9", text:"Провокування інших", punish:"Мут 12–24 години"},
{code:"1.10", text:"Повторне грубе порушення", punish:"Мут 24 години"},
{code:"6.1", text:"Повідомлення не по темі", punish:"Попередження"}
];

const updates = [
{title:"Оновлення 1.0", desc:"Додано систему правил та модальне вікно."},
{title:"Оновлення 1.1", desc:"Додано пошук по коду порушення."},
{title:"Оновлення 1.2", desc:"Додано пункт 6.1 Повідомлення не по темі."}
];

function showRules() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    rules.forEach(rule => {
        content.innerHTML += `
        <div class="card" onclick="openModal('${rule.code}','${rule.text}','${rule.punish}')">
            <h3>${rule.code}</h3>
            <p>${rule.text}</p>
        </div>`;
    });
}

function showUpdates() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    updates.forEach(update => {
        content.innerHTML += `
        <div class="card" onclick="openUpdate('${update.title}','${update.desc}')">
            <h3>${update.title}</h3>
        </div>`;
    });
}

function openModal(code,text,punish){
    document.getElementById("modalText").innerHTML =
    `<h2>${code}</h2>
     <p>${text}</p>
     <p><b>Покарання:</b> ${punish}</p>`;
    document.getElementById("modal").style.display="block";
}

function openUpdate(title,desc){
    document.getElementById("modalText").innerHTML =
    `<h2>${title}</h2><p>${desc}</p>`;
    document.getElementById("modal").style.display="block";
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}

function searchRule(){
    const value = document.getElementById("searchInput").value;
    const rule = rules.find(r=>r.code===value);
    if(rule){
        openModal(rule.code,rule.text,rule.punish);
    } else {
        alert("Правило не знайдено");
    }
}

showRules();
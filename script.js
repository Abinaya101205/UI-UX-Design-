/* ------------------------------
  WorldTaste - interactions/data
   - 5 cuisines
   - 12 dishes each
   - search, explore, login, dark mode, order
-------------------------------*/

// Data: 5 cuisines (India, Italy, China, Mexico, USA) each with 12 dishes
const CUISINES = [
  {
    id: 'india',
    name: 'India',
    desc: 'Indian Cuisine — rich spices & regional classics',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    restaurant: 'Spice Garden',
    dishes: [
      { name: "Biryani", chef:"Amit Verma", rating:4.9, restaurant:"Hyderabadi Spice", offer:"25% OFF", img:"https://i.pinimg.com/1200x/74/c5/b9/74c5b9ee839fec8a0ab867742f0278a5.jpg" },
      { name: "Masala Dosa", chef:"Priya Nair", rating:4.6, restaurant:"South Tiffins", offer:"15% OFF", img:"https://i.pinimg.com/1200x/cc/dd/f5/ccddf5e07f71b336cb7cb47480686c52.jpg" },
      { name: "Butter Chicken", chef:"Raj Malhotra", rating:4.7, restaurant:"Punjabi Rasoi", offer:"10% OFF", img:"https://i.pinimg.com/1200x/b4/7f/cd/b47fcdbfe6bef8fb71117b5d66f1a170.jpg" },
      { name: "Paneer Tikka", chef:"Sunita Sharma", rating:4.4, restaurant:"Veg Delight", offer:"5% OFF", img:"https://i.pinimg.com/1200x/50/9c/d4/509cd4ca90c727994e5da18bc9f81472.jpg" },
      { name: "Chole Bhature", chef:"Anil Gupta", rating:4.5, restaurant:"North Feast", offer:"10% OFF", img:"https://i.pinimg.com/1200x/f5/9c/9a/f59c9a7f63c2cd4bd587f3de73f184a4.jpg" },
      { name: "Rogan Josh", chef:"Saira Khan", rating:4.8, restaurant:"Kashmiri Kitchen", offer:"15% OFF", img:"https://i.pinimg.com/1200x/27/fa/c5/27fac5522c334903b3539d16d084dec3.jpg" },
      { name: "Idli Sambar", chef:"Ramesh Iyer", rating:4.3, restaurant:"South Spice", offer:"5% OFF", img:"https://i.pinimg.com/1200x/ef/f6/0f/eff60f10251dede991417cfdcd14806b.jpg" },
      { name: "Pav Bhaji", chef:"Manish Kapoor", rating:4.6, restaurant:"Mumbai Tastes", offer:"10% OFF", img:"https://i.pinimg.com/1200x/bd/03/1b/bd031b26343b8c2cc6f035d68f8d90ab.jpg" },
      { name: "Dhokla", chef:"Geeta Patel", rating:4.2, restaurant:"Gujarat Delights", offer:"5% OFF", img:"https://i.pinimg.com/1200x/9c/00/db/9c00db2d32c37b130703c727a56f0be7.jpg" },
      { name: "Aloo Paratha", chef:"Neha Singh", rating:4.4, restaurant:"North Feast", offer:"10% OFF", img:"https://i.pinimg.com/1200x/d4/6b/b6/d46bb6597cf98d78138cecc8d06d5d8b.jpg" },
      { name: "Chicken Tikka", chef:"Vikram Joshi", rating:4.6, restaurant:"Tandoori House", offer:"15% OFF", img:"https://i.pinimg.com/1200x/96/07/6a/96076a8556b102342e5e7ec6743d3324.jpg" },
      { name: "Gulab Jamun", chef:"Rekha Mehra", rating:4.5, restaurant:"Sweet Treats", offer:"5% OFF", img:"https://i.pinimg.com/1200x/92/84/1f/92841ff20a6932f172ed89dd36953932.jpg" }
    ]
  },

  {
    id: 'italy',
    name: 'Italy',
    desc: 'Italian Cuisine — pasta, pizza & dolce',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    restaurant: 'La Trattoria',
    dishes: [
      { name:"Pizza Margherita", chef:"Marco Rossi", rating:4.9, restaurant:"Oven Love", offer:"20% OFF", img:"https://i.pinimg.com/1200x/9b/3d/66/9b3d6651d702d33a9686be58174437b6.jpg" },
      { name:"Lasagna", chef:"Giulia Bianchi", rating:4.7, restaurant:"La Trattoria", offer:"15% OFF", img:"https://i.pinimg.com/1200x/99/89/00/99890008f70f471cd760b4ef81555b08.jpg" },
      { name:"Carbonara", chef:"Luca Romano", rating:4.6, restaurant:"Roma Kitchen", offer:"10% OFF", img:"https://i.pinimg.com/1200x/35/ee/c4/35eec4557d610d4fd10e62863aacd085.jpg" },
      { name:"Tiramisu", chef:"Elena Ferri", rating:4.8, restaurant:"Dolce House", offer:"Buy 1 Get 1", img:"https://i.pinimg.com/1200x/a5/cf/34/a5cf3473c175ed2469c5c700db0e6370.jpg" },
      { name:"Risotto", chef:"Paolo Conte", rating:4.5, restaurant:"Risotteria", offer:"10% OFF", img:"https://i.pinimg.com/1200x/2b/ef/5b/2bef5b57af2154f64239a89c1c25b495.jpg" },
      { name:"Panna Cotta", chef:"Serena Gallo", rating:4.3, restaurant:"Dolce House", offer:"5% OFF", img:"https://i.pinimg.com/1200x/df/73/f3/df73f3b3b798f86087ff4b05ddc21180.jpg" },
      { name:"Gnocchi", chef:"Fabio Marini", rating:4.2, restaurant:"Comfort Pasta", offer:"10% OFF", img:"https://i.pinimg.com/1200x/da/12/19/da12192752ee8ed89262c9fd83fa5f60.jpg" },
      { name:"Bruschetta", chef:"Alessia Neri", rating:4.4, restaurant:"Antipasti Bar", offer:"Free Drink", img:"https://i.pinimg.com/1200x/6a/03/7e/6a037e94167e3a70304a9ecd01014d7d.jpg" },
      { name:"Focaccia", chef:"Enzo Fontana", rating:4.1, restaurant:"Bakery Italia", offer:"5% OFF", img:"https://i.pinimg.com/1200x/51/3c/94/513c9484a2d1e2a4e65d4c4cb8e1a2f7.jpg" },
      { name:"Osso Buco", chef:"Giorgio Polo", rating:4.3, restaurant:"Trattoria Vecchia", offer:"15% OFF", img:"https://i.pinimg.com/1200x/57/43/37/5743373a57adfc8feaeec4324038d452.jpg" },
      { name:"Caprese Salad", chef:"Francesca Riva", rating:4.2, restaurant:"Green Kitchen", offer:"10% OFF", img:"https://i.pinimg.com/1200x/13/da/b8/13dab88c65f951016012b42f0ef87222.jpg" },
      { name:"Gelato", chef:"Nicola Moretti", rating:4.8, restaurant:"Gelateria", offer:"Buy 2 Get 1", img:"https://i.pinimg.com/1200x/00/64/f2/0064f2a4a6af96911582b5c45bb22b2b.jpg" }
    ]
  },

  {
    id: 'china',
    name: 'China',
    desc: 'Chinese Cuisine — regional flavors & wok mastery',
    flag: 'https://i.pinimg.com/1200x/18/d3/a8/18d3a8f115e6f5c7b4b0780c1b718a7f.jpg',
    restaurant: 'Dragon House',
    dishes: [
      { name:"Peking Duck", chef:"Li Wei", rating:4.9, restaurant:"Imperial Duck", offer:"20% OFF", img:"https://i.pinimg.com/1200x/7f/89/58/7f8958e03c4e620f33bc496d02d17bc3.jpg" },
      { name:"Kung Pao Chicken", chef:"Chen Ming", rating:4.6, restaurant:"Wok Express", offer:"15% OFF", img:"https://i.pinimg.com/1200x/5f/ba/59/5fba59980569f56ac14211e0e9b03e69.jpg" },
      { name:"Sweet and Sour Pork", chef:"Zhao Lin", rating:4.5, restaurant:"Classic China", offer:"10% OFF", img:"https://i.pinimg.com/1200x/ab/99/7f/ab997f09f39537cbd6e114f51467093a.jpg" },
      { name:"Dim Sum", chef:"Wang Fang", rating:4.7, restaurant:"Tea House", offer:"15% OFF", img:"https://i.pinimg.com/1200x/06/b3/6e/06b36e38f7a7877fc3ae1ddc46c07cca.jpg" },
      { name:"Mapo Tofu", chef:"Liu Xiao", rating:4.4, restaurant:"Szechuan Spice", offer:"10% OFF", img:"https://i.pinimg.com/1200x/67/dc/77/67dc77191bbdfef5539db5a4e8570fc7.jpg" },
      { name:"Chow Mein", chef:"Sun Qian", rating:4.3, restaurant:"Noodle Corner", offer:"5% OFF", img:"https://i.pinimg.com/1200x/68/3a/ab/683aab0b53d5314b86a3439da984cd8c.jpg" },
      { name:"Hot Pot", chef:"Deng Lei", rating:4.6, restaurant:"Hot Pot Spot", offer:"20% OFF", img:"https://i.pinimg.com/1200x/2b/ed/08/2bed084984dc5c4c496c4609817b01a0.jpg" },
      { name:"Char Siu", chef:"Ho Ming", rating:4.2, restaurant:"Roast House", offer:"10% OFF", img:"https://i.pinimg.com/1200x/f8/c2/bd/f8c2bd96eddb3c72fd66b27cccb08cae.jpg" },
      { name:"Spring Rolls", chef:"Xia Yun", rating:4.1, restaurant:"Roll Bar", offer:"5% OFF", img:"https://i.pinimg.com/1200x/90/7e/0e/907e0ec969115c5b6355d044abb608fc.jpg" },
      { name:"Wonton Soup", chef:"Ma Lei", rating:4.3, restaurant:"Soup Kitchen", offer:"10% OFF", img:"https://i.pinimg.com/1200x/90/b2/fd/90b2fd83536c43d99e43c5bb9b13c847.jpg" },
      { name:"Sichuan Noodles", chef:"Zhou Jie", rating:4.5, restaurant:"Szechuan Street", offer:"15% OFF", img:"https://i.pinimg.com/1200x/d9/de/02/d9de02f59b983203ec90cdb80bb642aa.jpg" },
      { name:"Egg Fried Rice", chef:"Fan Hua", rating:4.0, restaurant:"Rice & Co", offer:"5% OFF", img:"https://i.pinimg.com/1200x/eb/cc/f5/ebccf57b9d125a7a9ec818bf772dd76e.jpg" }
    ]
  },

  {
    id: 'usa',
    name: 'USA',
    desc: 'American Cuisine — comfort food & regional classics',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    restaurant: 'All-American Eats',
    dishes: [
      { name:"Cheeseburger", chef:"Tom Walker", rating:4.8, restaurant:"Burger Barn", offer:"15% OFF", img:"https://i.pinimg.com/1200x/4c/99/2e/4c992e3df95723d93e1547131c7b196a.jpg" },
      { name:"BBQ Ribs", chef:"Sam Carter", rating:4.7, restaurant:"Smokehouse", offer:"20% OFF", img:"https://i.pinimg.com/1200x/18/ef/32/18ef32d09785274a4eaa58b5a3824913.jpg" },
      { name:"Fried Chicken", chef:"Mary Johnson", rating:4.6, restaurant:"Southern Comfort", offer:"10% OFF", img:"https://i.pinimg.com/736x/54/31/2a/54312aefcb222d75fe69e1be747ad48c.jpg" },
      { name:"Mac and Cheese", chef:"Linda Ray", rating:4.5, restaurant:"Comfort Kitchen", offer:"10% OFF", img:"https://i.pinimg.com/1200x/c3/19/b2/c319b271bb18dd886882895c06cfd3a8.jpg" },
      { name:"Clam Chowder", chef:"Peter Flynn", rating:4.2, restaurant:"Coastal Eats", offer:"10% OFF", img:"https://i.pinimg.com/1200x/fc/6a/96/fc6a965e56db6cdeded60ca70aa042de.jpg" },
      { name:"Philly Cheesesteak", chef:"Roberto Cruz", rating:4.4, restaurant:"Philly Stop", offer:"15% OFF", img:"https://i.pinimg.com/1200x/31/97/3f/31973f8efa8cc4a7adff7162b7fb08ab.jpg" },
      { name:"New York Pizza", chef:"Giovanni Pace", rating:4.6, restaurant:"NY Slice", offer:"20% OFF", img:"https://i.pinimg.com/1200x/4c/b0/42/4cb042896121dfa4d0356bc7026446f0.jpg" },
      { name:"Pancakes", chef:"Emily Stone", rating:4.3, restaurant:"Breakfast Club", offer:"Buy 1 Get 1", img:"https://i.pinimg.com/1200x/f8/83/d1/f883d1a8822028497dd62e8413b43bef.jpg" },
      { name:"Lobster Roll", chef:"Hank Miller", rating:4.5, restaurant:"Sea Shack", offer:"15% OFF", img:"https://i.pinimg.com/1200x/bb/9e/5f/bb9e5f7c42baa31415fe7de499fb7406.jpg" },
      { name:"Cobb Salad", chef:"Nina Foster", rating:4.1, restaurant:"Green Bowl", offer:"10% OFF", img:"https://i.pinimg.com/736x/36/8f/75/368f758b5497126de43a16aff78f56dc.jpg" },
      { name:"Hot Dog", chef:"Billy Joe", rating:4.0, restaurant:"Street Bites", offer:"5% OFF", img:"https://i.pinimg.com/1200x/e4/bb/da/e4bbda0d22ac35375fb73b71ec2bfa24.jpg" },
      { name:"Apple Pie", chef:"Grace Hall", rating:4.7, restaurant:"Pie Corner", offer:"10% OFF", img:"https://i.pinimg.com/1200x/23/56/ec/2356ecb3665be9ab3e1bec830a1e0528.jpg" }
    ]
  }
];

/* ---------------------------
   DOM references
----------------------------*/
const cuisineRow = document.getElementById('cuisineRow');
const dishesArea = document.getElementById('dishesArea');
const searchInput = document.getElementById('globalSearch');
const searchBtn = document.getElementById('searchBtn');
const exploreBtn = document.getElementById('exploreBtn');
const viewRestaurantsBtn = document.getElementById('viewRestaurants');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const modalCancel = document.getElementById('modalCancel');
const loginForm = document.getElementById('loginForm');
const toastContainer = document.getElementById('toastContainer');
const darkToggle = document.getElementById('darkToggle');

/* ---------------------------
   Helpers
----------------------------*/
function el(tag, cls='') { const e = document.createElement(tag); if(cls) e.className = cls; return e; }
function showToast(msg, ms=2500){
  const t = el('div','toast'); t.textContent = msg;
  toastContainer.appendChild(t);
  setTimeout(()=> t.style.opacity = '0.01', ms-300);
  setTimeout(()=> t.remove(), ms);
}

/* ---------------------------
   Render cuisine cards
----------------------------*/
function renderCuisineCards(){
  cuisineRow.innerHTML = '';
  CUISINES.forEach(c=>{
    const card = el('article','cuisine-card');
    const flag = el('img','flag'); flag.src = c.flag; flag.alt = ${c.name} flag;
    const h = el('h3'); h.textContent = c.name;
    const p = el('p','muted'); p.textContent = c.desc;
    const rest = el('p','muted'); rest.textContent = Top: ${c.restaurant};
    const btnRow = el('div','');
    const viewBtn = el('button','btn small open-btn'); viewBtn.textContent = 'Explore Dishes';
    viewBtn.dataset.target = c.id;
    btnRow.appendChild(viewBtn);

    card.appendChild(flag);
    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(rest);
    card.appendChild(btnRow);

    cuisineRow.appendChild(card);
  });
}

/* ---------------------------
   Render dishes grid (12 cards)
----------------------------*/
function renderDishesForCuisine(cuisineId){
  const c = CUISINES.find(x=> x.id === cuisineId);
  if(!c) return;
  dishesArea.innerHTML = '';

  // header
  const header = el('div','dishes-header');
  const title = el('h3'); title.textContent = ${c.name} — Popular Dishes;
  const closeBtn = el('button','btn small'); closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', ()=> { dishesArea.innerHTML = ''; window.scrollTo({top: document.getElementById('explore').offsetTop - 80, behavior:'smooth'}); });
  header.appendChild(title);
  header.appendChild(closeBtn);
  dishesArea.appendChild(header);

  // grid
  const grid = el('div','dishes-grid');
  // ensure exactly 12 (if more, slice; if less, show all)
  const list = c.dishes.slice(0,12);
  list.forEach(d => {
    const card = el('div','dish-card');
    const img = el('img'); img.src = d.img; img.alt = d.name;
    const body = el('div','dish-body');
    const titleRow = el('div','dish-title');
    const nameEl = el('h4'); nameEl.textContent = d.name;
    const rating = el('div'); rating.className = 'dish-meta'; rating.textContent = ⭐ ${d.rating};
    titleRow.appendChild(nameEl); titleRow.appendChild(rating);

    const chef = el('div','dish-meta'); chef.textContent = Chef: ${d.chef || '—'};
    const rest = el('div','dish-meta'); rest.textContent = Restaurant: ${d.restaurant || c.restaurant};
    const offerRow = el('div','tag-row');
    const offerTag = el('div','offer'); offerTag.textContent = d.offer || '';
    const orderBtn = el('button','order-btn'); orderBtn.textContent = 'Order Now';
    orderBtn.addEventListener('click', ()=> {
      showToast(Order placed: ${d.name} from ${d.restaurant}.);
    });

    offerRow.appendChild(offerTag);
    offerRow.appendChild(orderBtn);

    body.appendChild(titleRow);
    body.appendChild(chef);
    body.appendChild(rest);
    body.appendChild(offerRow);

    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });

  dishesArea.appendChild(grid);
  // scroll to dishes
  setTimeout(()=> {
    dishesArea.scrollIntoView({behavior:'smooth', block:'start'});
  }, 120);
}

/* ---------------------------
   Search: searches across all dishes and restaurants
----------------------------*/
function runSearch(query){
  const q = (query || '').trim().toLowerCase();
  if(!q){
    showToast('Please type a dish or restaurant to search.');
    return;
  }
  // compile results across cuisines
  const results = [];
  CUISINES.forEach(c=>{
    c.dishes.forEach(d=>{
      if(d.name.toLowerCase().includes(q) || (d.restaurant && d.restaurant.toLowerCase().includes(q))){
        results.push({...d, cuisine: c.name});
      }
    });
  });

  // render results
  dishesArea.innerHTML = '';
  const header = el('div','dishes-header');
  const title = el('h3'); title.textContent = Search results for: "${q}" (${results.length});
  const clearBtn = el('button','btn small'); clearBtn.textContent = 'Clear';
  clearBtn.addEventListener('click', ()=> { dishesArea.innerHTML=''; searchInput.value=''; });
  header.appendChild(title); header.appendChild(clearBtn);
  dishesArea.appendChild(header);

  if(results.length === 0){
    const empty = el('p'); empty.className='muted'; empty.textContent = 'No dishes or restaurants matched your search.';
    dishesArea.appendChild(empty);
    return;
  }

  const grid = el('div','dishes-grid');
  results.forEach(d=>{
    const card = el('div','dish-card');
    const img = el('img'); img.src = d.img; img.alt = d.name;
    const body = el('div','dish-body');
    const titleRow = el('div','dish-title');
    const nameEl = el('h4'); nameEl.textContent = d.name;
    const rating = el('div'); rating.className = 'dish-meta'; rating.textContent = ⭐ ${d.rating};
    titleRow.appendChild(nameEl); titleRow.appendChild(rating);

    const chef = el('div','dish-meta'); chef.textContent = Chef: ${d.chef || '—'};
    const rest = el('div','dish-meta'); rest.textContent = Restaurant: ${d.restaurant || '—'};
    const cuisine = el('div','dish-meta'); cuisine.textContent = Cuisine: ${d.cuisine};
    const offerRow = el('div','tag-row');
    const offerTag = el('div','offer'); offerTag.textContent = d.offer || '';
    const orderBtn = el('button','order-btn'); orderBtn.textContent = 'Order Now';
    orderBtn.addEventListener('click', ()=> showToast(Order placed: ${d.name} from ${d.restaurant}.));

    offerRow.appendChild(offerTag); offerRow.appendChild(orderBtn);

    body.appendChild(titleRow);
    body.appendChild(chef);
    body.appendChild(rest);
    body.appendChild(cuisine);
    body.appendChild(offerRow);

    card.appendChild(img); card.appendChild(body);
    grid.appendChild(card);
  });

  dishesArea.appendChild(grid);
  dishesArea.scrollIntoView({behavior:'smooth'});
}

/* ---------------------------
   UI wiring
----------------------------*/
document.addEventListener('DOMContentLoaded', ()=> {
  renderCuisineCards();
  // default show first cuisine
  renderDishesForCuisine(CUISINES[0].id);

  // click handling for dynamically created Explore buttons
  document.body.addEventListener('click', (ev)=>{
    if(ev.target.matches('.open-btn')){
      const target = ev.target.dataset.target;
      renderDishesForCuisine(target);
    }
  });

  // search
  searchBtn.addEventListener('click', ()=> runSearch(searchInput.value));
  searchInput.addEventListener('keypress', (e)=> { if(e.key === 'Enter') runSearch(searchInput.value); });

  // explore button scroll
  exploreBtn.addEventListener('click', ()=> {
    document.getElementById('explore').scrollIntoView({behavior:'smooth'});
  });

  viewRestaurantsBtn.addEventListener('click', ()=> {
    // show a list of top restaurants quick view
    dishesArea.innerHTML = '';
    const header = el('div','dishes-header');
    const title = el('h3'); title.textContent = 'Top partner restaurants';
    header.appendChild(title);
    dishesArea.appendChild(header);

    const cardWrap = el('div'); cardWrap.style.display='grid';
    cardWrap.style.gridTemplateColumns = 'repeat(auto-fit,minmax(220px,1fr))';
    cardWrap.style.gap = '12px';

    // collect unique restaurants from data
    const restaurants = new Map();
    CUISINES.forEach(c=>{
      c.dishes.forEach(d => {
        if(!restaurants.has(d.restaurant)){
          restaurants.set(d.restaurant, { name:d.restaurant, cuisine:c.name, famous:d.name, img:d.img });
        }
      });
    });

    restaurants.forEach(r=>{
      const rc = el('div','cuisine-card');
      const img = el('img','flag'); img.src = r.img; img.alt = r.name;
      const h = el('h3'); h.textContent = r.name;
      const p = el('p','muted'); p.textContent = Famous for: ${r.famous} (${r.cuisine});
      rc.appendChild(img); rc.appendChild(h); rc.appendChild(p);
      cardWrap.appendChild(rc);
    });

    dishesArea.appendChild(cardWrap);
    dishesArea.scrollIntoView({behavior:'smooth'});
  });

  // login modal
  loginBtn.addEventListener('click', ()=> {
    loginModal.classList.remove('hidden');
    loginModal.setAttribute('aria-hidden','false');
  });
  closeLogin.addEventListener('click', ()=> {
    loginModal.classList.add('hidden'); loginModal.setAttribute('aria-hidden','true');
  });
  modalCancel.addEventListener('click', ()=> {
    loginModal.classList.add('hidden'); loginModal.setAttribute('aria-hidden','true');
  });

  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if(!email || !password){ showToast('Please enter email and password'); return; }
    loginModal.classList.add('hidden'); showToast(Welcome back, ${document.getElementById('name').value || 'User'}!);
  });

  // dark mode toggle
  darkToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark-mode');
    if(document.documentElement.classList.contains('dark-mode')){
      document.body.style.background = 'linear-gradient(180deg,#000814,#001d3d)';
      darkToggle.textContent = 'Light';
      showToast('Dark mode: ON');
    } else {
      document.body.style.background = '';
      darkToggle.textContent = 'Dark';
      showToast('Dark mode: OFF');
    }
  });

  // Smooth nav anchors
  document.querySelectorAll('.nav-link').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const id = a.getAttribute('href').replace('#','');
      const elNode = document.getElementById(id);
      if(elNode) elNode.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});

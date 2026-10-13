const defaultProducts = [
      {name:{ar:'سلسلة نجمة',en:'Star Necklace'},price:1250,img:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80'},
      {name:{ar:'سلسلة حرف',en:'Initial Necklace'},price:1200,img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80'},
      {name:{ar:'سلسلة قلب',en:'Heart Necklace'},price:1150,img:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80'},
      {name:{ar:'سلسلة ورقة',en:'Leaf Necklace'},price:1250,img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80'},
      {name:{ar:'سلسلة شمس',en:'Sun Necklace'},price:1200,img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80'},
      {name:{ar:'سلسلة وردة',en:'Flower Necklace'},price:1150,img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80'}
    ];
    let products = defaultProducts;
    try {
      const savedProducts = localStorage.getItem('zekra_products');
      if (savedProducts !== null) {
        const parsed = JSON.parse(savedProducts);
        if (Array.isArray(parsed)) products = parsed;
      }
    } catch(e) { products = defaultProducts; }

    function saveProducts(){
      try { localStorage.setItem('zekra_products', JSON.stringify(products)); } catch(e) {}
    }

    const translations = {
      ar:{loginNav:'دخول',whatsapp:'تواصل واتساب',loginTitle:'تسجيل الدخول',loginSub:'أهلًا بيك في ZEKRA',customerRole:'مشتري / عميل',adminRole:'أدمن',emailLabel:'البريد الإلكتروني',passwordLabel:'كلمة المرور',nameLabel:'الاسم',loginButton:'دخول',signupToggle:'إنشاء حساب عميل جديد',addProductTitle:'إضافة منتج جديد',productNameLabel:'اسم المنتج',productPriceLabel:'السعر بالجنيه',productImageLabel:'ارفع صورة المنتج من جهازك',addProductButton:'إضافة المنتج',logout:'تسجيل الخروج',securityNote:'',customerWelcome:'تم تسجيل الدخول بنجاح.',adminWelcome:'تم تسجيل الدخول إلى لوحة تحكم الأدمن بنجاح.',adminEmailError:'بريد الأدمن غير صحيح.',adminPasswordError:'كلمة مرور الأدمن غير صحيحة.',productAdded:'تمت إضافة المنتج بنجاح.',productDeleted:'تم حذف المنتج بنجاح.',productError:'اكتب اسم المنتج وسعرًا صحيحًا.',inventoryTitle:'المنتجات المعروضة حالياً (حذف)',adminBannerText:'لوحة تحكم الأدمن نشطة: يمكنك إضافة منتجات وحذف أي منتج وإدارة الحجوزات.',openAdminPanel:'+ إضافة منتج جديد',topline:'✦ كل سلسلة... ذكرى لا تُنسى ✦',home:'الرئيسية',store:'المتجر',about:'من نحن',contact:'تواصل معنا',heroTitle:'ذِكرى',heroText:'سلاسل تحمل معك<br>أجمل لحظاتك... إلى الأبد',shopNow:'تسوّقي الآن ←',bestSellers:'أكثر السلاسل مبيعًا',promoTitle:'تفاصيل صغيرة ..',promoText:'تحمل معاني كبيرة.',discover:'اكتشفي المزيد ←',aboutTitle:'عن ذِكرى',aboutText:'كل سلسلة في ذِكرى هي أكثر من مجرد قطعة مجوهرات. هي ذكرى تُحفظ، ومشاعر تُترجم، وقصة تبقى معك دائمًا. تصاميم بسيطة وأنيقة، لتكون جزءًا من لحظاتك الأجمل.',learnMore:'اعرفي المزيد ←',quality:'جودة عالية',qualitySub:'خامات مختارة بعناية',shipping:'شحن سريع',shippingSub:'لجميع أنحاء مصر',secure:'دفع آمن',secureSub:'بأمان واطمئنان',tile1:'← تصاميم جديدة',tile2:'← خامات عالية الجودة',tile3:'← تغليف مميز',tile4:'← اختاري ما يشبهك',newsletterTitle:'اشتركي في قائمتنا البريدية',newsletterText:'ليصلك كل جديد من تصاميمنا وعروضنا الخاصة',emailPlaceholder:'أدخل بريدك الإلكتروني',privacy:'سياسة الخصوصية',terms:'الشحن والاستبدال',rights:'جميع الحقوق محفوظة.',added:'تمت إضافة المنتج إلى السلة',cart:'عدد المنتجات في السلة: ',account:'حساب العميل',subscribed:'شكرًا لاشتراكك!',chatBotTitle:'مساعد ذِكرى الذكي ✦',chatBotSub:'متواجد لمساعدتك واختيار سلسلتك',chatInputPlaceholder:'اكتبي رسالتك هنا...',bookingsTitle:'طلبات الحجز من الشات بوت'},
      en:{loginNav:'Login',whatsapp:'Chat on WhatsApp',loginTitle:'Sign in',loginSub:'Welcome to ZEKRA',customerRole:'Customer',adminRole:'Admin',emailLabel:'Email address',passwordLabel:'Password',nameLabel:'Name',loginButton:'Sign in',signupToggle:'Create a customer account',addProductTitle:'Add a new product',productNameLabel:'Product name',productPriceLabel:'Price in EGP',productImageLabel:'Upload product image from your device',addProductButton:'Add product',logout:'Log out',securityNote:'',customerWelcome:'Signed in successfully.',adminWelcome:'Admin panel opened successfully.',adminEmailError:'The admin email is incorrect.',adminPasswordError:'The admin password is incorrect.',productAdded:'Product added successfully.',productDeleted:'Product deleted successfully.',productError:'Enter a product name and valid price.',inventoryTitle:'Currently Displayed Products (Delete)',adminBannerText:'Admin panel active: You can add or remove products and manage bookings.',openAdminPanel:'+ Add New Product',topline:'✦ Every necklace holds a memory ✦',home:'Home',store:'Shop',about:'About Us',contact:'Contact Us',heroTitle:'ZEKRA',heroText:'Necklaces to carry<br>your most beautiful moments, forever',shopNow:'SHOP NOW →',bestSellers:'BEST SELLERS',promoTitle:'Little details...',promoText:'With a world of meaning.',discover:'DISCOVER MORE →',aboutTitle:'About ZEKRA',aboutText:'Every ZEKRA necklace is more than a piece of jewelry. It holds a memory, expresses a feeling, and tells a story that stays with you. Simple, elegant designs made to become part of your most beautiful moments.',learnMore:'LEARN MORE →',quality:'Premium Quality',qualitySub:'Carefully selected materials',shipping:'Fast Shipping',shippingSub:'Across Egypt',secure:'Secure Checkout',secureSub:'Shop with confidence',tile1:'← NEW DESIGNS',tile2:'← PREMIUM QUALITY',tile3:'← GIFT-WORTHY PACKAGING',tile4:'← FIND YOUR STYLE',newsletterTitle:'JOIN OUR NEWSLETTER',newsletterText:'Get updates on new designs and special offers.',emailPlaceholder:'Enter your email address',privacy:'Privacy Policy',terms:'Shipping & Returns',rights:'All rights reserved.',added:'Product added to cart',cart:'Items in your cart: ',account:'Customer Account',subscribed:'Thanks for subscribing!',chatBotTitle:'ZEKRA Smart Assistant ✦',chatBotSub:'Here to help you choose your necklace',chatInputPlaceholder:'Type your message here...',bookingsTitle:'Chatbot Reservation Orders'}
    };
    let lang='ar', toastTimer;
    let cartItems = [];
    try { cartItems = JSON.parse(localStorage.getItem('zekra_cart') || '[]'); if (!Array.isArray(cartItems)) cartItems=[]; } catch(e) { cartItems=[]; }

    const ADMIN_EMAIL='ywsfwlydmhmd02@gmail.com';
    const ADMIN_PASSWORD='yousif walid';
    let adminSession = null;
    try {
      const savedAdmin = sessionStorage.getItem('zekra_admin_session');
      if(savedAdmin) adminSession = JSON.parse(savedAdmin);
    } catch(e) { adminSession = null; }

    // --- Customer Accounts & Session (Unlinked from Admin) ---
    let customers = [];
    try {
      const savedCust = localStorage.getItem('zekra_customers');
      if(savedCust) customers = JSON.parse(savedCust) || [];
    } catch(e) { customers = []; }

    let currentCustomer = null;
    try {
      const savedSession = localStorage.getItem('zekra_customer_session');
      if(savedSession) currentCustomer = JSON.parse(savedSession);
    } catch(e) { currentCustomer = null; }

    function openCustomerAuth(mode = 'login'){
      document.getElementById('customerAuthModal').classList.add('open');
      document.body.style.overflow = 'hidden';
      setCustAuthMode(mode);
    }

    function closeCustomerAuth(){
      document.getElementById('customerAuthModal').classList.remove('open');
      document.body.style.overflow = '';
      const res = document.getElementById('custAuthResult');
      if(res) res.classList.remove('show');
    }

    function setCustAuthMode(mode){
      const isSignup = (mode === 'signup');
      document.getElementById('custTabLogin').classList.toggle('active', !isSignup);
      document.getElementById('custTabSignup').classList.toggle('active', isSignup);
      document.getElementById('custLoginForm').style.display = isSignup ? 'none' : 'block';
      document.getElementById('custSignupForm').style.display = isSignup ? 'block' : 'none';
      const title = document.getElementById('custModalTitle');
      const sub = document.getElementById('custModalSub');
      if(isSignup){
        if(title) title.textContent = lang==='ar' ? 'إنشاء حساب مشتري جديد ✨' : 'Create Buyer Account ✨';
        if(sub) sub.textContent = lang==='ar' ? 'سجلي بياناتكِ للاستمتاع بتجربة تسوق سريعة ومتابعة حجوزاتكِ' : 'Register to enjoy easy shopping and track your orders';
      } else {
        if(title) title.textContent = lang==='ar' ? 'تسجيل دخول المشتري ✦' : 'Customer Sign In ✦';
        if(sub) sub.textContent = lang==='ar' ? 'أهلاً بكِ في ذِكرى! سجلي دخولكِ لمتابعة طلباتكِ' : 'Welcome back to ZEKRA! Sign in to track orders';
      }
    }

    function handleCustomerSignup(e){
      e.preventDefault();
      const name = document.getElementById('custSignupName').value.trim();
      const email = document.getElementById('custSignupEmail').value.trim().toLowerCase();
      const phone = document.getElementById('custSignupPhone').value.trim();
      const address = document.getElementById('custSignupAddress').value.trim();
      const password = document.getElementById('custSignupPassword').value;

      if(!name || !email || !phone || !password){
        showToast(lang==='ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill all required fields.');
        return;
      }

      // Check if email already registered
      const existing = customers.find(c => c.email === email);
      if(existing){
        showToast(lang==='ar' ? 'هذا البريد الإلكتروني مسجل بالفعل. يرجى تسجيل الدخول.' : 'This email is already registered. Please sign in.');
        setCustAuthMode('login');
        return;
      }

      const newCust = {
        id: 'CUST-' + Date.now(),
        name,
        email,
        phone,
        address,
        password,
        createdAt: new Date().toISOString()
      };

      customers.push(newCust);
      try { localStorage.setItem('zekra_customers', JSON.stringify(customers)); } catch(err) {}

      // Log in immediately
      currentCustomer = newCust;
      try { localStorage.setItem('zekra_customer_session', JSON.stringify(currentCustomer)); } catch(err) {}

      updateCustomerNavUI();
      closeCustomerAuth();
      document.getElementById('custSignupForm').reset();
      showToast(lang==='ar' ? `أهلاً بكِ يا ${name}! تم إنشاء حسابكِ بنجاح 🌸` : `Welcome, ${name}! Your account has been created 🌸`);
    }

    function handleCustomerLogin(e){
      e.preventDefault();
      const email = document.getElementById('custLoginEmail').value.trim().toLowerCase();
      const password = document.getElementById('custLoginPassword').value;

      const customer = customers.find(c => c.email === email && c.password === password);
      if(!customer){
        showToast(lang==='ar' ? 'البريد أو كلمة المرور غير صحيحة، أو يمكنكِ إنشاء حساب جديد.' : 'Invalid email or password, or please create an account.');
        return;
      }

      currentCustomer = customer;
      try { localStorage.setItem('zekra_customer_session', JSON.stringify(currentCustomer)); } catch(err) {}

      updateCustomerNavUI();
      closeCustomerAuth();
      document.getElementById('custLoginForm').reset();
      showToast(lang==='ar' ? `أهلاً بعودتكِ يا ${customer.name} 🌸` : `Welcome back, ${customer.name} 🌸`);
    }

    function openCustomerProfile(){
      if(!currentCustomer) { openCustomerAuth('login'); return; }
      document.getElementById('customerProfileModal').classList.add('open');
      document.body.style.overflow = 'hidden';

      document.getElementById('profName').textContent = currentCustomer.name;
      document.getElementById('profEmail').textContent = currentCustomer.email;
      document.getElementById('profPhone').textContent = currentCustomer.phone;
      document.getElementById('profAddress').textContent = currentCustomer.address || (lang==='ar'?'لم يحدد بعد':'Not specified');

      // Render customer past bookings
      const list = document.getElementById('custOrdersList');
      if(list){
        const cleanCustPhone = (currentCustomer.phone || '').replace(/[^0-9]/g, '');
        const myBookings = bookings.filter(b => {
          const bPhone = (b.customerPhone || '').replace(/[^0-9]/g, '');
          return (bPhone && cleanCustPhone && bPhone === cleanCustPhone) || (b.customerName && b.customerName.toLowerCase() === currentCustomer.name.toLowerCase());
        });

        if(!myBookings.length){
          list.innerHTML = `<div style="text-align:center;padding:14px;color:var(--muted);font-size:12px;">${lang==='ar'?'لا توجد حجوزات سابقة مسجلة حتى الآن.':'No past reservations recorded yet.'}</div>`;
        } else {
          list.innerHTML = myBookings.map(b => `
            <div class="cust-order-item">
              <div style="display:flex;justify-content:space-between;font-weight:700;margin-bottom:3px;">
                <span>${b.productName}</span>
                <span style="color:var(--gold);">${b.productPrice.toLocaleString('en-US')} EGP</span>
              </div>
              <div style="color:var(--muted);font-size:11px;">كود الحجز: ${b.id} | ${b.timestampStr}</div>
              <div style="font-size:11px;margin-top:2px;">الحالة: <strong>${b.status==='completed'?(lang==='ar'?'تم التسليم ✅':'Delivered'):(b.status==='contacted'?(lang==='ar'?'تم التواصل 📞':'Contacted'):(lang==='ar'?'قيد التجهيز ⏳':'Processing'))}</strong></div>
            </div>
          `).join('');
        }
      }
    }

    function closeCustomerProfile(){
      document.getElementById('customerProfileModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    function logoutCustomer(){
      currentCustomer = null;
      try { localStorage.removeItem('zekra_customer_session'); } catch(e) {}
      updateCustomerNavUI();
      closeCustomerProfile();
      showToast(lang==='ar' ? 'تم تسجيل الخروج بنجاح.' : 'Logged out successfully.');
    }

    function toggleMobileMenu(){
      const drawer = document.getElementById('mobileDrawer');
      const btn = document.getElementById('mobileMenuToggle');
      if(drawer){
        const isOpen = drawer.classList.toggle('open');
        if(btn) btn.textContent = isOpen ? '✕' : '☰';
      }
    }
    function closeMobileMenu(){
      const drawer = document.getElementById('mobileDrawer');
      const btn = document.getElementById('mobileMenuToggle');
      if(drawer && drawer.classList.contains('open')){
        drawer.classList.remove('open');
        if(btn) btn.textContent = '☰';
      }
    }

    document.addEventListener('click', function(e){
      const drawer = document.getElementById('mobileDrawer');
      const toggle = document.getElementById('mobileMenuToggle');
      if(drawer && drawer.classList.contains('open')){
        if(!drawer.contains(e.target) && (!toggle || !toggle.contains(e.target))){
          closeMobileMenu();
        }
      }
    });

    function updateCustomerNavUI(){
      const authWrap = document.getElementById('customerAuthNavWrap');
      const profWrap = document.getElementById('customerProfileNavWrap');
      const nameEl = document.getElementById('customerNameNav');
      const loginBtn = document.getElementById('loginNavBtn');
      const signupBtn = document.getElementById('signupNavBtn');
      const mobAuth = document.getElementById('mobileDrawerAuthArea');

      if(loginBtn) loginBtn.textContent = lang==='ar' ? 'دخول' : 'Sign in';
      if(signupBtn) signupBtn.textContent = lang==='ar' ? '✨ إنشاء حساب' : '✨ Sign up';

      if(currentCustomer){
        if(authWrap) authWrap.style.display = 'none';
        if(profWrap) profWrap.style.display = 'block';
        if(nameEl) nameEl.textContent = currentCustomer.name.split(' ')[0] || (lang==='ar'?'حسابي':'My Account');

        if(mobAuth){
          mobAuth.innerHTML = `
            <div style="background:#fffaf4;border:1px solid var(--line);padding:10px 12px;border-radius:8px;font-size:13px;display:flex;justify-content:space-between;align-items:center;">
              <div><strong>👤 ${currentCustomer.name}</strong></div>
              <button class="banner-btn" onclick="closeMobileMenu();openCustomerProfile()" style="font-size:11px;padding:6px 12px;">${lang==='ar'?'عرض بياناتي':'My Profile'}</button>
            </div>
            <button class="logout-login" onclick="closeMobileMenu();logoutCustomer()" style="width:100%;margin-top:6px;color:#b3261e;border-color:#b3261e;font-size:12px;padding:8px;">${lang==='ar'?'تسجيل الخروج':'Sign out'}</button>
          `;
        }

        // Pre-fill checkout delivery form
        const bName = document.getElementById('buyerName');
        const bPhone = document.getElementById('buyerPhone');
        const bAddr = document.getElementById('buyerAddress');
        if(bName && !bName.value) bName.value = currentCustomer.name;
        if(bPhone && !bPhone.value) bPhone.value = currentCustomer.phone;
        if(bAddr && !bAddr.value && currentCustomer.address) bAddr.value = currentCustomer.address;
      } else {
        if(authWrap) authWrap.style.display = 'flex';
        if(profWrap) profWrap.style.display = 'none';

        if(mobAuth){
          mobAuth.innerHTML = `
            <div style="display:flex;gap:8px;">
              <button class="nav-auth-btn" style="flex:1;justify-content:center;border:1px solid var(--line);padding:10px;font-size:13px;" onclick="closeMobileMenu();openCustomerAuth('login')">${lang==='ar'?'دخول':'Sign in'}</button>
              <button class="nav-auth-btn nav-signup-btn" style="flex:1;justify-content:center;padding:10px;font-size:13px;" onclick="closeMobileMenu();openCustomerAuth('signup')">${lang==='ar'?'✨ إنشاء حساب':'✨ Sign up'}</button>
            </div>
          `;
        }
      }
    }

    // --- Dedicated Admin Panel & Login (100% Unlinked from Customer) ---
    function openAdminAuth(){
      document.getElementById('adminAuthModal').classList.add('open');
      document.body.style.overflow = 'hidden';
      const isAdmin = !!(adminSession && adminSession.email === ADMIN_EMAIL);
      document.getElementById('adminLoginForm').style.display = isAdmin ? 'none' : 'block';
      document.getElementById('adminPanel').classList.toggle('show', isAdmin);
      const res = document.getElementById('adminAuthResult');
      if(res) res.classList.remove('show');
      if(isAdmin){
        renderAdminInventory();
        updateNotifBadges();
        const notifyEmailInput = document.getElementById('adminNotifyEmail');
        if(notifyEmailInput) notifyEmailInput.value = getAdminNotifyEmail();
      }
    }

    function closeAdminAuth(){
      document.getElementById('adminAuthModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    function toggleAdminPassVisibility(){
      const inp = document.getElementById('adminLoginPassword');
      if(inp) inp.type = (inp.type === 'password' ? 'text' : 'password');
    }

    function handleAdminLogin(e){
      e.preventDefault();
      const email = document.getElementById('adminLoginEmail').value.trim().toLowerCase();
      const password = (document.getElementById('adminLoginPassword').value || '').trim();

      const enteredClean = password.toLowerCase().replace(/\s+/g, ' ');
      const enteredNoSpace = password.toLowerCase().replace(/\s+/g, '');
      const validClean = ADMIN_PASSWORD.toLowerCase().replace(/\s+/g, ' ');
      const validNoSpace = ADMIN_PASSWORD.toLowerCase().replace(/\s+/g, '');

      if(email !== ADMIN_EMAIL.toLowerCase()){
        showToast(translations[lang].adminEmailError);
        return;
      }
      if(enteredClean !== validClean && enteredNoSpace !== validNoSpace){
        showToast(translations[lang].adminPasswordError);
        return;
      }

      adminSession = { role: 'admin', email: ADMIN_EMAIL };
      try { sessionStorage.setItem('zekra_admin_session', JSON.stringify(adminSession)); } catch(err) {}

      document.getElementById('adminLoginForm').style.display = 'none';
      document.getElementById('adminPanel').classList.add('show');
      renderAdminInventory();
      updateAdminUI(true);
      renderProducts();
      showToast(translations[lang].adminWelcome);
    }

    function logoutAdmin(){
      adminSession = null;
      try { sessionStorage.removeItem('zekra_admin_session'); } catch(err) {}
      document.getElementById('adminLoginForm').reset();
      document.getElementById('adminLoginForm').style.display = 'block';
      document.getElementById('adminPanel').classList.remove('show');
      updateAdminUI(false);
      renderProducts();
      closeAdminAuth();
      showToast(lang==='ar' ? 'تم تسجيل خروج الأدمن بنجاح.' : 'Admin logged out.');
    }

    // Compatibility aliases
    function openLogin(){ openCustomerAuth('login'); }
    function closeLogin(){ closeCustomerAuth(); closeAdminAuth(); }
    function logoutDemo(){ logoutAdmin(); }

    function updateAdminUI(isAdmin){
      const banner = document.getElementById('adminModeBanner');
      if(banner) banner.style.display = isAdmin ? 'flex' : 'none';
      updateNotifBadges();
    }

    async function addProductFromAdmin(){
      const isAdmin = !!(adminSession && adminSession.email === ADMIN_EMAIL);
      if(!isAdmin){showToast(translations[lang].adminEmailError);return}
      const name=document.getElementById('newProductName').value.trim();
      const price=Number(document.getElementById('newProductPrice').value);
      const imageInput=document.getElementById('newProductImage');
      const file=imageInput.files && imageInput.files[0];
      if(!name || !Number.isFinite(price) || price<=0){showToast(translations[lang].productError);return}
      if(!file){showToast(lang==='ar' ? 'اختار صورة للمنتج من جهازك.' : 'Please choose a product image from your device.');return}
      if(!file.type.startsWith('image/')){showToast(lang==='ar' ? 'اختار ملف صورة صالح.' : 'Please select a valid image file.');return}
      try{
        // Resize/compress the selected image so it is more likely to fit in browser storage.
        const img = await new Promise((resolve,reject)=>{
          const reader=new FileReader();
          reader.onload=()=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=reader.result;};
          reader.onerror=reject;
          reader.readAsDataURL(file);
        });
        const maxSide=1000, scale=Math.min(1,maxSide/Math.max(img.width,img.height));
        const canvas=document.createElement('canvas');
        canvas.width=Math.max(1,Math.round(img.width*scale));
        canvas.height=Math.max(1,Math.round(img.height*scale));
        canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
        const imageData=canvas.toDataURL('image/jpeg',0.82);
        products.unshift({name:{ar:name,en:name},price,img:imageData});
        saveProducts();
        renderProducts();
        renderAdminInventory();
        document.getElementById('newProductName').value='';
        document.getElementById('newProductPrice').value='';
        imageInput.value='';
        showToast(translations[lang].productAdded);
      }catch(error){
        showToast(lang==='ar' ? 'تعذر تحميل الصورة. جرّب صورة أصغر.' : 'Could not load the image. Try a smaller image.');
      }
    }
    function deleteProduct(index){
      const isAdmin = !!(adminSession && adminSession.email === ADMIN_EMAIL);
      if(!isAdmin){showToast(translations[lang].adminEmailError);return}
      const p = products[index];
      if(!p) return;
      const title = (p.name && (p.name[lang] || p.name.ar || p.name.en)) || '';
      const confirmMsg = lang==='ar' ? `هل أنت متأكد من حذف المنتج "${title}"؟` : `Are you sure you want to delete "${title}"?`;
      if(!confirm(confirmMsg)) return;

      products.splice(index, 1);
      saveProducts();
      renderProducts();
      renderAdminInventory();
      showToast(translations[lang].productDeleted);
    }
    function renderAdminInventory(){
      const list=document.getElementById('adminInventoryList');
      if(!list) return;
      if(!products.length){
        list.innerHTML=`<p style="text-align:center;color:var(--muted);font-size:12px;margin:8px 0;">${lang==='ar'?'لا توجد منتجات حاليًا':'No products currently'}</p>`;
        return;
      }
      list.innerHTML=products.map((p,i)=>`
        <div class="admin-inv-item">
          <img src="${p.img}" alt="">
          <div class="admin-inv-info">
            <strong>${(p.name && (p.name[lang]||p.name.ar))||''}</strong>
            <div style="color:var(--muted);font-size:11px;">${p.price.toLocaleString('en-US')} EGP</div>
          </div>
          <button class="admin-inv-del" onclick="deleteProduct(${i})" title="${lang==='ar'?'حذف هذا المنتج':'Delete this product'}">🗑️ ${lang==='ar'?'حذف':'Delete'}</button>
        </div>
      `).join('');
    }

    function renderProducts(){
      const grid=document.getElementById('productGrid');
      const isAdmin = !!(adminSession && adminSession.email===ADMIN_EMAIL);
      if(!products.length){
        grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">${lang==='ar'?'لا توجد منتجات معروضة حاليًا. اضغط على لوحة الأدمن لإضافة منتج.':'No products available currently. Use the admin panel to add products.'}</div>`;
        return;
      }
      grid.innerHTML=products.map((p,i)=>`<article class="product">
        ${isAdmin ? `<button class="card-delete-badge" onclick="deleteProduct(${i})" title="${lang==='ar'?'حذف هذا المنتج':'Delete this product'}">🗑️</button>` : ''}
        <img src="${p.img}" alt="${(p.name && (p.name[lang]||p.name.ar))||''}" loading="lazy">
        <div class="product-info">
          <div class="product-name">${(p.name && (p.name[lang]||p.name.ar))||''}</div>
          <div class="price">${p.price.toLocaleString('en-US')} EGP</div>
          <button class="add-cart" onclick="addCart(${i})" aria-label="Add ${(p.name && (p.name[lang]||p.name.ar))||''} to cart">♧</button>
          ${isAdmin ? `<button class="remove-product" onclick="deleteProduct(${i})" title="${lang==='ar'?'حذف هذا المنتج':'Delete this product'}">🗑️ ${lang==='ar'?'حذف المنتج':'Delete'}</button>` : ''}
        </div>
      </article>`).join('')+
      `<aside class="promo"><div class="leaf">❧</div><strong data-i18n="promoTitle">${translations[lang].promoTitle}</strong><p data-i18n="promoText">${translations[lang].promoText}</p><a class="text-link" href="#about" data-i18n="discover">${translations[lang].discover}</a></aside>`;
    }
    function toggleLanguage(){
      lang=lang==='ar'?'en':'ar';
      document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
      const langText = lang==='ar'?'English 🌐':'العربية 🌐';
      const mainLangBtn = document.getElementById('langToggle');
      if(mainLangBtn) mainLangBtn.textContent = langText;
      const mobLangBtn = document.getElementById('mobileLangToggle');
      if(mobLangBtn) mobLangBtn.textContent = langText;
      document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
      document.querySelectorAll('[data-placeholder]').forEach(el=>{el.placeholder=translations[lang][el.dataset.placeholder]});
      const chatTitleEl = document.getElementById('chatBotTitle');
      if(chatTitleEl) chatTitleEl.textContent = translations[lang].chatBotTitle;
      const chatInpEl = document.getElementById('chatInput');
      if(chatInpEl) chatInpEl.placeholder = translations[lang].chatInputPlaceholder;
      renderProducts();
      renderAdminInventory();
      updateAdminUI(adminSession && adminSession.email===ADMIN_EMAIL);
      if(document.getElementById('cartModal').classList.contains('open')) renderCart();
      if(document.getElementById('bookingsModal').classList.contains('open')) renderBookingsList();
      updateCustomerNavUI();
    }
    function showToast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2400)}
    function saveCart(){
      try { localStorage.setItem('zekra_cart', JSON.stringify(cartItems)); } catch(e) {}
      document.getElementById('cartCount').textContent=cartItems.reduce((sum,item)=>sum+item.qty,0);
    }
    function addCart(index){
      const p=products[index]; if(!p) return;
      const existing=cartItems.find(item=>item.name.ar===p.name.ar && item.price===p.price && item.img===p.img);
      if(existing) existing.qty++; else cartItems.push({...p,qty:1});
      saveCart(); showToast(translations[lang].added);
    }
    function showCart(){
      document.getElementById('cartModal').classList.add('open'); document.body.style.overflow='hidden';
      document.getElementById('checkoutForm').classList.remove('show'); renderCart();
    }
    function closeCart(){document.getElementById('cartModal').classList.remove('open');document.body.style.overflow=''}
    function renderCart(){
      const list=document.getElementById('cartItems');
      document.getElementById('cartTitle').textContent=lang==='ar'?'سلة المشتريات':'Your Shopping Cart';
      document.getElementById('cartTotalLabel').textContent=lang==='ar'?'الإجمالي':'Total';
      document.getElementById('continueShopping').textContent=lang==='ar'?'تكملة الشراء':'Continue shopping';
      document.getElementById('checkoutButton').textContent=lang==='ar'?'إتمام الشراء':'Checkout';
      document.getElementById('checkoutTitle').textContent=lang==='ar'?'بيانات التوصيل':'Delivery details';
      document.getElementById('buyerNameLabel').textContent=lang==='ar'?'الاسم بالكامل':'Full name';
      document.getElementById('buyerPhoneLabel').textContent=lang==='ar'?'رقم الموبايل':'Phone number';
      document.getElementById('buyerAddressLabel').textContent=lang==='ar'?'عنوان التوصيل بالتفصيل':'Full delivery address';
      document.getElementById('confirmOrder').textContent=lang==='ar'?'تأكيد الطلب عبر واتساب':'Confirm order via WhatsApp';
      document.getElementById('checkoutNote').textContent=lang==='ar'?'سيتم إرسال تفاصيل طلبك إلى المتجر عبر واتساب لتأكيد الطلب والشحن.':'Your order details will be sent to the store on WhatsApp for confirmation and delivery.';
      if(!cartItems.length){list.innerHTML=`<div class="cart-empty">${lang==='ar'?'السلة فاضية. اختار منتجاتك الأول.':'Your cart is empty. Add some products first.'}</div>`;document.getElementById('checkoutButton').disabled=true;document.getElementById('checkoutButton').style.opacity='.5'}
      else {list.innerHTML=cartItems.map((item,i)=>`<div class="cart-item"><img src="${item.img}" alt=""><div><div class="cart-item-name">${item.name[lang]||item.name.ar}</div><div class="cart-item-price">${item.price.toLocaleString('en-US')} EGP × ${item.qty}</div><div class="cart-item-price">${(item.price*item.qty).toLocaleString('en-US')} EGP</div></div><button class="cart-remove" onclick="removeCartItem(${i})">${lang==='ar'?'حذف':'Remove'}</button></div>`).join('');document.getElementById('checkoutButton').disabled=false;document.getElementById('checkoutButton').style.opacity='1'}
      const total=cartItems.reduce((sum,item)=>sum+item.price*item.qty,0);document.getElementById('cartTotal').textContent=total.toLocaleString('en-US')+' EGP';
    }
    function removeCartItem(index){cartItems.splice(index,1);saveCart();renderCart()}
    function showCheckout(){if(!cartItems.length)return;document.getElementById('checkoutForm').classList.add('show');document.getElementById('checkoutForm').scrollIntoView({behavior:'smooth',block:'nearest'})}
    function completeCheckout(e){
      e.preventDefault(); if(!cartItems.length)return;
      const name=document.getElementById('buyerName').value.trim(),phone=document.getElementById('buyerPhone').value.trim(),address=document.getElementById('buyerAddress').value.trim();
      const lines=cartItems.map(item=>`- ${item.name[lang]||item.name.ar} × ${item.qty} = ${(item.price*item.qty).toLocaleString('en-US')} EGP`).join('\n');
      const total=cartItems.reduce((sum,item)=>sum+item.price*item.qty,0);
      const message=(lang==='ar'?'طلب جديد من موقع ZEKRA\n':'New order from ZEKRA website\n')+lines+'\n'+(lang==='ar'?'الإجمالي: ':'Total: ')+total.toLocaleString('en-US')+' EGP\n'+(lang==='ar'?'الاسم: ':'Name: ')+name+'\n'+(lang==='ar'?'الموبايل: ':'Phone: ')+phone+'\n'+(lang==='ar'?'العنوان: ':'Address: ')+address;
      window.open('https://wa.me/201112264887?text='+encodeURIComponent(message),'_blank','noopener');
    }
    function notifyText(key){showToast(translations[lang][key])}
    function subscribe(e){e.preventDefault();showToast(translations[lang].subscribed);e.target.reset()}

    // Restore admin session
    if (adminSession && adminSession.email === ADMIN_EMAIL) {
      updateAdminUI(true);
    }

    // ==========================================
    // --- Bookings & Notifications Management ---
    // ==========================================
    let bookings = [];
    try {
      const savedBookings = localStorage.getItem('zekra_bookings');
      if (savedBookings) {
        const parsed = JSON.parse(savedBookings);
        if (Array.isArray(parsed)) bookings = parsed;
      }
    } catch(e) { bookings = []; }

    function saveBookings(){
      try { localStorage.setItem('zekra_bookings', JSON.stringify(bookings)); } catch(e) {}
      updateNotifBadges();
    }

    function getAdminNotifyEmail(){
      try {
        return localStorage.getItem('zekra_notify_email') || ADMIN_EMAIL;
      } catch(e) {
        return ADMIN_EMAIL;
      }
    }

    function saveAdminNotifyEmail(){
      const input = document.getElementById('adminNotifyEmail');
      if(!input) return;
      const val = input.value.trim().toLowerCase();
      if(!val || !val.includes('@')){
        showToast(lang==='ar'?'الرجاء إدخال بريد إلكتروني صالح.':'Please enter a valid email address.');
        return;
      }
      try { localStorage.setItem('zekra_notify_email', val); } catch(e) {}
      showToast(lang==='ar'?'تم حفظ بريد الإشعارات بنجاح.':'Notification email saved successfully.');
    }

    // Web Audio API Pleasant Luxury Chime
    function playNotificationSound(){
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if(!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        // Note 1: 784 Hz (G5)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(783.99, now);
        gain1.gain.setValueAtTime(0.18, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.55);

        // Note 2: 1046.5 Hz (C6) - Bell harmony
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1046.5, now + 0.16);
        gain2.gain.setValueAtTime(0.24, now + 0.16);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.16);
        osc2.stop(now + 1.1);
      } catch(e) {
        console.warn('Audio chime notice:', e);
      }
    }

    // Desktop Browser Notification
    function requestDesktopNotification(){
      if('Notification' in window && Notification.permission === 'default'){
        Notification.requestPermission();
      }
    }

    function showDesktopNotification(booking){
      if('Notification' in window && Notification.permission === 'granted'){
        try {
          new Notification(lang==='ar' ? '🔔 حجز جديد في متجر ذِكرى!' : '🔔 New ZEKRA Reservation!', {
            body: `${booking.customerName} - ${booking.productName} (${booking.productPrice} EGP)\n📞 ${booking.customerPhone}`,
            icon: booking.productImg || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=100&q=80'
          });
        } catch(e) {}
      }
    }

    // In-Site Alert Banner
    let alertBannerTimer = null;
    function showSiteAlertBanner(booking){
      const banner = document.getElementById('siteAlertBanner');
      if(!banner) return;
      const title = document.getElementById('alertBannerTitle');
      const text = document.getElementById('alertBannerText');
      if(title) title.textContent = lang==='ar' ? '🔔 حجز جديد وصل الآن عبر الشات بوت!' : '🔔 New Chatbot Reservation!';
      if(text) text.textContent = `${booking.customerName} قام بحجز ${booking.productName} (${booking.productPrice.toLocaleString('en-US')} EGP)`;
      banner.classList.add('show');
      clearTimeout(alertBannerTimer);
      alertBannerTimer = setTimeout(() => {
        dismissAlertBanner();
      }, 9000);
    }

    function dismissAlertBanner(){
      const banner = document.getElementById('siteAlertBanner');
      if(banner) banner.classList.remove('show');
    }

    // FormSubmit Email Dispatch
    async function sendBookingEmail(booking){
      const targetEmail = getAdminNotifyEmail();
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            '_subject': `🔔 حجز جديد في متجر ذِكرى: ${booking.customerName} - ${booking.productName}`,
            '_template': 'table',
            'كود الحجز': booking.id,
            'اسم العميل': booking.customerName,
            'رقم الموبايل': booking.customerPhone,
            'عنوان التوصيل': booking.customerAddress,
            'السلسلة المختارة': booking.productName,
            'السعر': `${booking.productPrice} EGP`,
            'ملاحظات العميل': booking.customerNotes || 'لا توجد ملاحظات',
            'تاريخ الحجز': booking.timestampStr
          })
        });
        const resData = await response.json();
        return { success: true, resData };
      } catch(err) {
        console.warn('FormSubmit email send attempt:', err);
        return { success: false, err };
      }
    }

    async function sendTestNotificationEmail(){
      const targetEmail = getAdminNotifyEmail();
      showToast(lang==='ar' ? `جاري إرسال إشعار تجريبي إلى ${targetEmail}...` : `Sending test notification to ${targetEmail}...`);
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            '_subject': '✦ تجربة إشعار الحجز من متجر ذِكرى ✦',
            '_template': 'table',
            'رسالة': 'هذا إشعار تجريبي للتأكد من وصول رسائل الحجوزات إلى بريدك الإلكتروني بنجاح.',
            'المتجر': 'ذِكرى | ZEKRA Jewelry',
            'الوقت': new Date().toLocaleString('ar-EG')
          })
        });
        const data = await res.json();
        showToast(lang==='ar' ? 'تم إرسال الإشعار التجريبي بنجاح! راجع صندوق بريدك.' : 'Test notification sent! Check your inbox.');
      } catch(e) {
        showToast(lang==='ar' ? 'تعذر الإرسال، تأكد من الاتصال بالإنترنت.' : 'Failed to send, check your connection.');
      }
    }

    // Trigger Complete Multi-Channel Notification
    function triggerNewBookingNotification(booking){
      // 1. Play sound chime
      playNotificationSound();

      // 2. Show floating on-site banner
      showSiteAlertBanner(booking);

      // 3. Desktop browser notification
      showDesktopNotification(booking);

      // 4. Update badges
      updateNotifBadges();

      // 5. Send Email via FormSubmit
      sendBookingEmail(booking);
    }

    // Update Badges Count
    function updateNotifBadges(){
      const newBookings = bookings.filter(b => b.status === 'new');
      const count = newBookings.length;
      const total = bookings.length;

      const notifCount = document.getElementById('notifCount');
      if(notifCount){
        if(count > 0){
          notifCount.textContent = count;
          notifCount.style.display = 'inline-grid';
        } else {
          notifCount.style.display = 'none';
        }
      }

      const adminBadge = document.getElementById('adminBookingsBadge');
      if(adminBadge) adminBadge.textContent = count > 0 ? `${count} جديد` : total;

      const adminModalCount = document.getElementById('adminModalBookingsCount');
      if(adminModalCount) adminModalCount.textContent = total;

      const totalBadge = document.getElementById('bookingsTotalBadge');
      if(totalBadge) totalBadge.textContent = `${total} (${count} جديد)`;

      const fcAll = document.getElementById('filterCountAll');
      if(fcAll) fcAll.textContent = total;
      const fcNew = document.getElementById('filterCountNew');
      if(fcNew) fcNew.textContent = count;
      const fcContacted = document.getElementById('filterCountContacted');
      if(fcContacted) fcContacted.textContent = bookings.filter(b => b.status === 'contacted').length;
      const fcCompleted = document.getElementById('filterCountCompleted');
      if(fcCompleted) fcCompleted.textContent = bookings.filter(b => b.status === 'completed').length;
    }

    // Bookings Modal Management
    let currentBookingFilter = 'all';
    function openBookingsModal(){
      document.getElementById('bookingsModal').classList.add('open');
      document.body.style.overflow = 'hidden';
      renderBookingsList();
      requestDesktopNotification();
    }

    function closeBookingsModal(){
      document.getElementById('bookingsModal').classList.remove('open');
      document.body.style.overflow = '';
    }

    function setBookingFilter(filter, btn){
      currentBookingFilter = filter;
      document.querySelectorAll('.booking-filter-btn').forEach(b => b.classList.remove('active'));
      if(btn) btn.classList.add('active');
      renderBookingsList();
    }

    function renderBookingsList(){
      const container = document.getElementById('bookingsListContainer');
      if(!container) return;

      let filtered = bookings;
      if(currentBookingFilter !== 'all'){
        filtered = bookings.filter(b => b.status === currentBookingFilter);
      }

      if(!filtered.length){
        container.innerHTML = `
          <div style="text-align:center;padding:45px 20px;color:var(--muted);font-size:13px;">
            <div style="font-size:36px;margin-bottom:10px;">📋</div>
            <strong>${lang==='ar'?'لا توجد طلبات حجز مطابقة حالياً.':'No matching bookings currently.'}</strong>
            <p style="margin:5px 0 0;font-size:11px;">${lang==='ar'?'عندما يقوم العميل بتأكيد الحجز عبر الشات بوت ستظهر الطلبات هنا فوراً.':'When customers book via the chatbot, orders will appear here instantly.'}</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(b => {
        const cleanPhone = (b.customerPhone || '').replace(/[^0-9]/g, '');
        const waText = encodeURIComponent(
          lang==='ar'
            ? `أهلاً ${b.customerName} 🌸، بنكلم حضرتك من متجر ذِكرى لتأكيد حجز ${b.productName} (كود الحجز: ${b.id}). هل العنوان ${b.customerAddress} مناسب للشحن والتوصيل؟`
            : `Hello ${b.customerName} 🌸, contacting you from ZEKRA regarding your reservation for ${b.productName} (Code: ${b.id}).`
        );
        const statusMap = {
          new: { text: lang==='ar'?'جديد 🔔':'New 🔔', cls: 'status-new' },
          contacted: { text: lang==='ar'?'تم التواصل 📞':'Contacted 📞', cls: 'status-contacted' },
          completed: { text: lang==='ar'?'تم التسليم ✅':'Delivered ✅', cls: 'status-completed' },
          cancelled: { text: lang==='ar'?'ملغي ✕':'Cancelled ✕', cls: 'status-cancelled' }
        };
        const curStatus = statusMap[b.status] || statusMap.new;

        return `
          <div class="booking-card-item">
            <img src="${b.productImg}" alt="${b.productName}">
            <div class="booking-info-main">
              <h4>
                <span>${b.productName} — ${b.productPrice.toLocaleString('en-US')} EGP</span>
                <span class="booking-status-badge ${curStatus.cls}">${curStatus.text}</span>
              </h4>
              <div class="booking-info-meta">
                <div><strong>👤 العميل:</strong> ${b.customerName}</div>
                <div><strong>📱 الموبايل:</strong> <a href="tel:${b.customerPhone}" style="color:var(--brown);text-decoration:underline;">${b.customerPhone}</a></div>
                <div><strong>📍 العنوان:</strong> ${b.customerAddress}</div>
                <div><strong>🕒 التوقيت:</strong> ${b.timestampStr}</div>
                ${b.customerNotes ? `<div style="grid-column:1/-1;"><strong>🎁 ملاحظات / إهداء:</strong> ${b.customerNotes}</div>` : ''}
                <div style="grid-column:1/-1;font-size:11px;color:var(--muted);"><strong>🔖 كود الحجز:</strong> ${b.id}</div>
              </div>
            </div>
            <div class="booking-actions-col">
              <a href="https://wa.me/${cleanPhone.startsWith('0') ? '2' + cleanPhone : cleanPhone}?text=${waText}" target="_blank" rel="noopener noreferrer" class="booking-act-btn booking-wa-btn" title="تواصل واتساب مع العميل">
                🟢 واتساب العميل
              </a>
              <select class="booking-status-select" onchange="updateBookingStatus('${b.id}', this.value)" aria-label="تغيير الحالة">
                <option value="new" ${b.status==='new'?'selected':''}>جديد 🔔</option>
                <option value="contacted" ${b.status==='contacted'?'selected':''}>تم التواصل 📞</option>
                <option value="completed" ${b.status==='completed'?'selected':''}>تم التسليم ✅</option>
                <option value="cancelled" ${b.status==='cancelled'?'selected':''}>ملغي ✕</option>
              </select>
              <button class="booking-act-btn booking-del-btn" onclick="deleteBooking('${b.id}')">🗑️ حذف</button>
            </div>
          </div>
        `;
      }).join('');
    }

    function updateBookingStatus(id, newStatus){
      const b = bookings.find(item => item.id === id);
      if(b){
        b.status = newStatus;
        saveBookings();
        renderBookingsList();
        showToast(lang==='ar' ? 'تم تحديث حالة الحجز.' : 'Booking status updated.');
      }
    }

    function deleteBooking(id){
      if(!confirm(lang==='ar' ? 'هل تريد حذف هذا الحجز نهائياً؟' : 'Are you sure you want to delete this booking?')) return;
      bookings = bookings.filter(item => item.id !== id);
      saveBookings();
      renderBookingsList();
      showToast(lang==='ar' ? 'تم حذف الحجز.' : 'Booking deleted.');
    }

    // ==========================================
    // --- Interactive Chatbot Assistant Engine ---
    // ==========================================
    let chatOpen = false;
    let chatTipDismissed = false;
    let chatState = {
      step: 'WELCOME',
      product: null,
      name: '',
      phone: '',
      address: '',
      notes: ''
    };

    function toggleChatWindow(){
      chatOpen = !chatOpen;
      const win = document.getElementById('chatWindow');
      if(!win) return;
      win.classList.toggle('open', chatOpen);
      if(chatOpen){
        dismissChatTip();
        requestDesktopNotification();
        const msgContainer = document.getElementById('chatMessages');
        if(msgContainer && !msgContainer.children.length){
          initChatbot();
        }
        setTimeout(() => {
          const inp = document.getElementById('chatInput');
          if(inp) inp.focus();
        }, 200);
      }
    }

    function dismissChatTip(){
      chatTipDismissed = true;
      const tip = document.getElementById('chatLauncherTip');
      if(tip) tip.style.display = 'none';
    }

    // Auto show chat tip after 3.5 seconds
    setTimeout(() => {
      if(!chatOpen && !chatTipDismissed){
        const tip = document.getElementById('chatLauncherTip');
        if(tip) tip.style.display = 'flex';
      }
    }, 3500);

    function restartChatSession(){
      chatState = {
        step: 'WELCOME',
        product: null,
        name: '',
        phone: '',
        address: '',
        notes: ''
      };
      const msgContainer = document.getElementById('chatMessages');
      if(msgContainer) msgContainer.innerHTML = '';
      initChatbot();
    }

    function scrollToBottomChat(){
      const msgContainer = document.getElementById('chatMessages');
      if(msgContainer){
        msgContainer.scrollTop = msgContainer.scrollHeight;
      }
    }

    function showTypingIndicator(show){
      const el = document.getElementById('chatTypingIndicator');
      if(el) el.style.display = show ? 'inline-flex' : 'none';
      if(show) scrollToBottomChat();
    }

    function addBotMessage(text, options = [], productCards = [], bookingTicket = null){
      showTypingIndicator(true);
      setTimeout(() => {
        showTypingIndicator(false);
        const msgContainer = document.getElementById('chatMessages');
        if(!msgContainer) return;

        const timeStr = new Date().toLocaleTimeString(lang==='ar'?'ar-EG':'en-US', {hour:'2-digit', minute:'2-digit'});
        const msgEl = document.createElement('div');
        msgEl.className = 'chat-msg bot';

        let innerHTML = `
          <div class="msg-avatar">💎</div>
          <div class="msg-bubble">
            <div>${text}</div>
        `;

        // Product Cards
        if(productCards && productCards.length){
          productCards.forEach((p, idx) => {
            const pName = (p.name && (p.name[lang] || p.name.ar)) || '';
            const realIndex = products.findIndex(item => (item.name && item.name.ar) === (p.name && p.name.ar) && item.price === p.price);
            innerHTML += `
              <div class="chat-product-card">
                <img src="${p.img}" alt="${pName}">
                <div class="chat-product-card-info">
                  <div class="chat-product-card-title">${pName}</div>
                  <div class="chat-product-card-price">${p.price.toLocaleString('en-US')} EGP</div>
                </div>
                <button class="chat-product-card-btn" onclick="startBookingProduct(${realIndex >= 0 ? realIndex : 0})">
                  🛍️ ${lang==='ar'?'حجز السلسلة':'Book now'}
                </button>
              </div>
            `;
          });
        }

        // Booking Summary Ticket
        if(bookingTicket){
          innerHTML += `
            <div class="chat-booking-ticket">
              <div class="ticket-head">✦ ${lang==='ar'?'ملخص حجز ذِكرى':'ZEKRA Reservation Summary'} ✦</div>
              <div class="ticket-row"><span>${lang==='ar'?'السلسلة:':'Necklace:'}</span><strong>${bookingTicket.productName}</strong></div>
              <div class="ticket-row"><span>${lang==='ar'?'السعر:':'Price:'}</span><strong>${bookingTicket.productPrice.toLocaleString('en-US')} EGP</strong></div>
              <div class="ticket-row"><span>${lang==='ar'?'الاسم:':'Name:'}</span><strong>${bookingTicket.name}</strong></div>
              <div class="ticket-row"><span>${lang==='ar'?'الموبايل:':'Phone:'}</span><strong>${bookingTicket.phone}</strong></div>
              <div class="ticket-row"><span>${lang==='ar'?'العنوان:':'Address:'}</span><strong>${bookingTicket.address}</strong></div>
              ${bookingTicket.notes ? `<div class="ticket-row"><span>${lang==='ar'?'الملاحظات:':'Notes:'}</span><strong>${bookingTicket.notes}</strong></div>` : ''}
              <div class="ticket-actions">
                <button class="ticket-confirm-btn" onclick="confirmBookingFinal()">
                  ✅ ${lang==='ar'?'تأكيد الحجز النهائي':'Confirm Booking'}
                </button>
                <button class="ticket-edit-btn" onclick="editBookingDetails()">
                  ✏️ ${lang==='ar'?'تعديل':'Edit'}
                </button>
              </div>
            </div>
          `;
        }

        // Interactive Chips
        if(options && options.length){
          innerHTML += `<div class="chat-chips-wrap">`;
          options.forEach(opt => {
            innerHTML += `<button class="chat-chip ${opt.primary ? 'primary' : ''}" onclick="handleChatChip('${opt.action}', '${escape(opt.value || opt.label)}')">${opt.label}</button>`;
          });
          innerHTML += `</div>`;
        }

        innerHTML += `<div class="msg-time">${timeStr}</div></div>`;
        msgEl.innerHTML = innerHTML;
        msgContainer.appendChild(msgEl);
        scrollToBottomChat();
      }, 350);
    }

    function addUserMessage(text){
      const msgContainer = document.getElementById('chatMessages');
      if(!msgContainer) return;
      const timeStr = new Date().toLocaleTimeString(lang==='ar'?'ar-EG':'en-US', {hour:'2-digit', minute:'2-digit'});
      const msgEl = document.createElement('div');
      msgEl.className = 'chat-msg user';
      msgEl.innerHTML = `
        <div class="msg-bubble">
          <div>${text}</div>
          <div class="msg-time">${timeStr}</div>
        </div>
      `;
      msgContainer.appendChild(msgEl);
      scrollToBottomChat();
    }

    function initChatbot(){
      const welcome = lang==='ar'
        ? 'أهلاً بيكِ في <strong>ذِكرى</strong>! 🌸 أنا مستشاركِ الذكي لمساعدتكِ في اختيار السلسلة المثالية المناسبة لذوقك أو لمناسبتك، وتأكيد الحجز فوراً.'
        : 'Welcome to <strong>ZEKRA</strong>! 🌸 I am your personal assistant to help you choose the perfect necklace and confirm your reservation.';
      const chips = lang==='ar'
        ? [
            { label: '🎁 بختار هدية لشخص مميز', action: 'REASON_GIFT' },
            { label: '✨ سلسلة أنيقة لنفسي', action: 'REASON_SELF' },
            { label: '🌟 أكثر السلاسل طلباً', action: 'SHOW_BESTSELLERS' },
            { label: '🏷️ الأسعار وخامات السلاسل', action: 'INFO_PRICES' }
          ]
        : [
            { label: '🎁 Gift for someone special', action: 'REASON_GIFT' },
            { label: '✨ For myself', action: 'REASON_SELF' },
            { label: '🌟 Best Sellers', action: 'SHOW_BESTSELLERS' },
            { label: '🏷️ Pricing & Material info', action: 'INFO_PRICES' }
          ];
      addBotMessage(welcome, chips);
    }

    function handleChatChip(action, rawVal){
      const val = unescape(rawVal);
      addUserMessage(val);
      processAction(action, val);
    }

    function processAction(action, val){
      if(action === 'REASON_GIFT'){
        chatState.step = 'CHOOSE_STYLE';
        const txt = lang==='ar'
          ? 'اختيار الهدية فن ومشاعر! 💝 تحبي تصميم السلسلة يكون:'
          : 'Choosing a gift is an art! 💝 What style do you prefer:';
        const chips = lang==='ar'
          ? [
              { label: '💖 ناعمة ورومانسية (قلب / وردة)', action: 'STYLE_DELICATE' },
              { label: '⭐ عصرية ولمّاعة (نجمة / شمس)', action: 'STYLE_CELESTIAL' },
              { label: '🔤 شخصية وخاصة (سلسلة حرف)', action: 'STYLE_INITIAL' },
              { label: '👀 عرض كل الموديلات', action: 'SHOW_ALL' }
            ]
          : [
              { label: '💖 Romantic (Heart / Flower)', action: 'STYLE_DELICATE' },
              { label: '⭐ Modern (Star / Sun)', action: 'STYLE_CELESTIAL' },
              { label: '🔤 Personal (Initial Necklace)', action: 'STYLE_INITIAL' },
              { label: '👀 View all models', action: 'SHOW_ALL' }
            ];
        addBotMessage(txt, chips);
      }
      else if(action === 'REASON_SELF'){
        chatState.step = 'CHOOSE_STYLE';
        const txt = lang==='ar'
          ? 'تستاهلي قطعة تليق بجمالك! ✨ إيه الستايل الأقرب لإطلالتك اليومية؟'
          : 'You deserve something special! ✨ What is your favorite everyday style?';
        const chips = lang==='ar'
          ? [
              { label: '🌸 رقيقة وهادية للاستخدام اليومي', action: 'STYLE_DELICATE' },
              { label: '✨ بارزة وأنيقة للمناسبات', action: 'STYLE_CELESTIAL' },
              { label: '🔤 سلسال بأول حرف من اسمي', action: 'STYLE_INITIAL' },
              { label: '👀 عرض كل التشكيلة', action: 'SHOW_ALL' }
            ]
          : [
              { label: '🌸 Delicate & daily wear', action: 'STYLE_DELICATE' },
              { label: '✨ Elegant for occasions', action: 'STYLE_CELESTIAL' },
              { label: '🔤 Initial letter', action: 'STYLE_INITIAL' },
              { label: '👀 View all styles', action: 'SHOW_ALL' }
            ];
        addBotMessage(txt, chips);
      }
      else if(action === 'STYLE_DELICATE'){
        const matches = products.filter(p => {
          const n = (p.name && (p.name.ar || p.name.en)) || '';
          return n.includes('قلب') || n.includes('وردة') || n.includes('ورقة') || n.toLowerCase().includes('heart') || n.toLowerCase().includes('flower');
        });
        const txt = lang==='ar'
          ? 'هذه أجمل التصاميم الناعمة والأكثر رقة في ذِكرى 🌸. اضغطي على زر الحجز لأي سلسلة تعجبك:'
          : 'Here are our most delicate and loved designs 🌸. Click book to reserve any of them:';
        addBotMessage(txt, [{ label: '🔄 موديلات تانية', action: 'SHOW_ALL' }], matches.length ? matches : products.slice(0, 3));
      }
      else if(action === 'STYLE_CELESTIAL'){
        const matches = products.filter(p => {
          const n = (p.name && (p.name.ar || p.name.en)) || '';
          return n.includes('نجمة') || n.includes('شمس') || n.toLowerCase().includes('star') || n.toLowerCase().includes('sun');
        });
        const txt = lang==='ar'
          ? 'تصاميم مستوحاة من النجوم والشمس، تضفي لمعة ساحرة ومميزة ✨:'
          : 'Celestial designs inspired by the sun and stars ✨:';
        addBotMessage(txt, [{ label: '🔄 موديلات تانية', action: 'SHOW_ALL' }], matches.length ? matches : products.slice(0, 3));
      }
      else if(action === 'STYLE_INITIAL'){
        const matches = products.filter(p => {
          const n = (p.name && (p.name.ar || p.name.en)) || '';
          return n.includes('حرف') || n.toLowerCase().includes('initial');
        });
        const txt = lang==='ar'
          ? 'سلسلة الحرف هي الأكثر طلباً في الهدايا! يمكنك تحديد الحرف المطلوب عند تأكيد الحجز 🔤:'
          : 'The Initial necklace is our top gift pick! You can specify the letter during booking 🔤:';
        addBotMessage(txt, [{ label: '🔄 موديلات تانية', action: 'SHOW_ALL' }], matches.length ? matches : products.slice(0, 2));
      }
      else if(action === 'SHOW_BESTSELLERS' || action === 'SHOW_ALL'){
        const txt = lang==='ar'
          ? 'تفضلي، هذه تشكيلة سلاسل ذِكرى الأكثر تميزاً وطلباً 💎:'
          : 'Here are ZEKRA favorite best sellers 💎:';
        addBotMessage(txt, [], products.slice(0, 4));
      }
      else if(action === 'INFO_PRICES'){
        const txt = lang==='ar'
          ? 'سلاسل ذِكرى مصنوعة من الستانلس ستيل الطبي عالي الجودة مطلي ذهب عيار 18، مقاوم للصدأ والماء ولا يتغير لونه ✨.<br><br>• الأسعار: تتراوح بين 1,150 و 1,250 جنيه مصري.<br>• الشحن: توصيل سريع لجميع المحافظات خلال 2 إلى 4 أيام.<br>• الدفع: عند الاستلام بعد معاينة المنتج.'
          : 'ZEKRA necklaces are made from premium surgical stainless steel with 18k gold plating. Waterproof and tarnish-resistant ✨.<br><br>• Prices: 1,150 - 1,250 EGP.<br>• Shipping: 2-4 days across Egypt.<br>• Payment: Cash on delivery.';
        const chips = lang==='ar'
          ? [
              { label: '🛍️ اختاري سلسلة دلوقتي', action: 'SHOW_ALL' },
              { label: '🌟 الأكثر طلباً', action: 'SHOW_BESTSELLERS' }
            ]
          : [
              { label: '🛍️ Choose a necklace', action: 'SHOW_ALL' },
              { label: '🌟 Best Sellers', action: 'SHOW_BESTSELLERS' }
            ];
        addBotMessage(txt, chips);
      }
      else if(action === 'NOTE_BOX'){
        chatState.notes = lang==='ar' ? 'طلب بوكس هدايا فاخر' : 'Luxury Gift Box requested';
        chatState.step = 'BOOK_CONFIRM';
        showBookingSummary();
      }
      else if(action === 'NOTE_CARD'){
        chatState.notes = lang==='ar' ? 'إضافة كارت إهداء خاص' : 'Special Gift Card requested';
        chatState.step = 'BOOK_CONFIRM';
        showBookingSummary();
      }
      else if(action === 'NOTE_NONE'){
        chatState.notes = lang==='ar' ? 'شحن عادي بدون إضافات' : 'Standard packaging';
        chatState.step = 'BOOK_CONFIRM';
        showBookingSummary();
      }
    }

    function startBookingProduct(prodIndex){
      const p = products[prodIndex] || products[0];
      chatState.product = p;
      const pName = (p.name && (p.name[lang] || p.name.ar)) || '';

      if (currentCustomer && currentCustomer.name) {
        chatState.name = currentCustomer.name;
        chatState.phone = currentCustomer.phone || '';
        chatState.address = currentCustomer.address || '';
        chatState.step = 'BOOK_NOTES';
        const firstName = currentCustomer.name.split(' ')[0] || currentCustomer.name;
        const txt = lang==='ar'
          ? `اختيار رائع جداً يا <strong>${firstName}</strong> 💖! سلسلة <strong>${pName}</strong> متوفرة (${p.price.toLocaleString('en-US')} EGP).<br><br>تم تحديد بياناتكِ المسجلة (الموبايل: <strong>${currentCustomer.phone}</strong>${currentCustomer.address ? `، العنوان: <strong>${currentCustomer.address}</strong>` : ''}).<br><br>هل تحبين إضافة كارت إهداء بكلمات معينة أو بوكس هدايا خاص؟`
          : `Excellent choice, <strong>${firstName}</strong> 💖! <strong>${pName}</strong> is available (${p.price.toLocaleString('en-US')} EGP).<br><br>Loaded your account details (${currentCustomer.phone}).<br><br>Would you like to add a special gift card or gift box?`;
        const chips = lang==='ar'
          ? [
              { label: '🎁 بوكس هدايا فاخر', action: 'NOTE_BOX' },
              { label: '✍️ كارت إهداء خاص', action: 'NOTE_CARD' },
              { label: 'بدون إضافات - عادي', action: 'NOTE_NONE' }
            ]
          : [
              { label: '🎁 Luxury Gift Box', action: 'NOTE_BOX' },
              { label: '✍️ Gift Card', action: 'NOTE_CARD' },
              { label: 'No additions', action: 'NOTE_NONE' }
            ];
        addBotMessage(txt, chips);
        return;
      }

      chatState.step = 'BOOK_NAME';
      const txt = lang==='ar'
        ? `اختيار رائع جداً! 💖 سلسلة <strong>${pName}</strong> متوفرة حالياً (${p.price.toLocaleString('en-US')} EGP).<br><br>لتأكيد حجزك، ما هو <strong>الاسم بالكامل</strong>؟`
        : `Excellent choice! 💖 The <strong>${pName}</strong> is available (${p.price.toLocaleString('en-US')} EGP).<br><br>To confirm your booking, what is your <strong>full name</strong>?`;
      addBotMessage(txt);
    }

    function showBookingSummary(){
      const p = chatState.product || products[0];
      const pName = (p.name && (p.name[lang] || p.name.ar)) || '';
      const ticket = {
        productName: pName,
        productPrice: p.price,
        name: chatState.name,
        phone: chatState.phone,
        address: chatState.address,
        notes: chatState.notes
      };
      const txt = lang==='ar'
        ? 'راجعي بيانات حجزك للتأكيد النهائي ✦:'
        : 'Please review your reservation details for final confirmation ✦:';
      addBotMessage(txt, [], [], ticket);
    }

    function editBookingDetails(){
      chatState.step = 'BOOK_NAME';
      const txt = lang==='ar'
        ? 'ما فيش مشكلة! تفضلي بكتابة <strong>الاسم بالكامل</strong> من جديد:'
        : 'No problem! Please re-enter your <strong>full name</strong>:';
      addBotMessage(txt);
    }

    function confirmBookingFinal(){
      const p = chatState.product || products[0];
      const pName = (p.name && (p.name[lang] || p.name.ar)) || '';
      const bookingId = 'ZK-' + Math.floor(100000 + Math.random() * 900000);

      const bookingObj = {
        id: bookingId,
        customerName: chatState.name || (lang==='ar'?'عميل ذِكرى':'ZEKRA Customer'),
        customerPhone: chatState.phone || '',
        customerAddress: chatState.address || '',
        customerNotes: chatState.notes || '',
        productName: pName,
        productPrice: p.price,
        productImg: p.img,
        timestamp: new Date().toISOString(),
        timestampStr: new Date().toLocaleString(lang==='ar'?'ar-EG':'en-US'),
        status: 'new'
      };

      // 1. Save to local storage bookings
      bookings.unshift(bookingObj);
      saveBookings();

      // 2. Trigger multi-channel real-time notifications (Sound, Site banner, Desktop, FormSubmit Email, Badges)
      triggerNewBookingNotification(bookingObj);

      // 3. Celebratory message in Chat
      const cleanPhone = (bookingObj.customerPhone || '').replace(/[^0-9]/g, '');
      const waMsg = encodeURIComponent(
        lang==='ar'
          ? `أهلاً ذِكرى، قمت بحجز ${bookingObj.productName} عبر الشات بوت (كود الحجز: ${bookingObj.id}). الاسم: ${bookingObj.customerName}، العنوان: ${bookingObj.customerAddress}`
          : `Hello ZEKRA, I reserved ${bookingObj.productName} via Chatbot (Code: ${bookingObj.id}). Name: ${bookingObj.customerName}`
      );

      const congrats = lang==='ar'
        ? `🎉 <strong>تم تأكيد حجزك بنجاح!</strong><br><br>
           🔖 <strong>كود الحجز:</strong> ${bookingObj.id}<br>
           📦 <strong>المنتج:</strong> ${bookingObj.productName} (${bookingObj.productPrice.toLocaleString('en-US')} EGP)<br>
           📧 وصل إشعار فوري لإدارة المتجر وللإيميل لتجهيز الطلب.<br>
           📞 سنتواصل معكِ هاتفياً أو عبر واتساب لتأكيد موعد التوصيل.<br><br>
           <a href="https://wa.me/201112264887?text=${waMsg}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25d366;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-decoration:none;margin-top:4px;">
             💬 متابعة الحجز عبر واتساب المتجر فوراً
           </a>`
        : `🎉 <strong>Reservation successfully confirmed!</strong><br><br>
           🔖 <strong>Booking Code:</strong> ${bookingObj.id}<br>
           📦 <strong>Item:</strong> ${bookingObj.productName} (${bookingObj.productPrice.toLocaleString('en-US')} EGP)<br>
           📧 Instant notification sent to store admin & email.<br>
           📞 We will contact you shortly to confirm delivery.<br><br>
           <a href="https://wa.me/201112264887?text=${waMsg}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25d366;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-decoration:none;margin-top:4px;">
             💬 Follow up on WhatsApp
           </a>`;

      addBotMessage(congrats, [
        { label: lang==='ar'?'🔄 حجز سلسلة أخرى':'🔄 Book another necklace', action: 'SHOW_ALL' },
        { label: lang==='ar'?'✦ العودة للرئيسية':'✦ Main menu', action: 'REASON_SELF' }
      ]);

      chatState.step = 'FINISHED';
    }

    function sendQuickMessage(text){
      if(!chatOpen) toggleChatWindow();
      const inp = document.getElementById('chatInput');
      if(inp) inp.value = text;
      handleChatSubmit(new Event('submit'));
    }

    function handleChatSubmit(e){
      if(e && e.preventDefault) e.preventDefault();
      const input = document.getElementById('chatInput');
      if(!input) return;
      const text = input.value.trim();
      if(!text) return;
      input.value = '';

      addUserMessage(text);

      // Handle multi-step booking questions
      if(chatState.step === 'BOOK_NAME'){
        chatState.name = text;
        chatState.step = 'BOOK_PHONE';
        const txt = lang==='ar'
          ? `أهلاً بيكِ يا <strong>${text}</strong> 🌸!<br>ممكن <strong>رقم الموبايل</strong> للتواصل ومتابعة الشحن والتوصيل؟`
          : `Nice to meet you, <strong>${text}</strong> 🌸!<br>Please provide your <strong>phone number</strong> for shipping updates:`;
        addBotMessage(txt);
        return;
      }
      else if(chatState.step === 'BOOK_PHONE'){
        chatState.phone = text;
        chatState.step = 'BOOK_ADDRESS';
        const txt = lang==='ar'
          ? 'تمام جداً 📱! 📍 <strong>عنوان التوصيل بالتفصيل</strong> (المحافظة، المنطقة، والشارع)؟'
          : 'Great 📱! 📍 Please enter your <strong>full delivery address</strong> (City, area, street):';
        addBotMessage(txt);
        return;
      }
      else if(chatState.step === 'BOOK_ADDRESS'){
        chatState.address = text;
        chatState.step = 'BOOK_NOTES';
        const txt = lang==='ar'
          ? 'هل تحبي إضافة كارت إهداء بكلمات معينة أو بوكس هدايا خاص؟ (اكتبي طلبك، أو اختاري من الأزرار):'
          : 'Would you like to add a personalized gift card or special gift box? (Type your note or choose):';
        const chips = lang==='ar'
          ? [
              { label: '🎁 بوكس هدايا فاخر', action: 'NOTE_BOX' },
              { label: '✍️ كارت إهداء خاص', action: 'NOTE_CARD' },
              { label: 'بدون إضافات - عادي', action: 'NOTE_NONE' }
            ]
          : [
              { label: '🎁 Luxury Gift Box', action: 'NOTE_BOX' },
              { label: '✍️ Gift Card', action: 'NOTE_CARD' },
              { label: 'No additions', action: 'NOTE_NONE' }
            ];
        addBotMessage(txt, chips);
        return;
      }
      else if(chatState.step === 'BOOK_NOTES'){
        chatState.notes = text;
        chatState.step = 'BOOK_CONFIRM';
        showBookingSummary();
        return;
      }

      // Natural Arabic & English Text Parsing
      const lower = text.toLowerCase();
      if(lower.includes('نجمة') || lower.includes('نجمه') || lower.includes('star')){
        const match = products.filter(p => (p.name && (p.name.ar||'')).includes('نجمة') || (p.name && (p.name.en||'')).toLowerCase().includes('star'));
        addBotMessage(lang==='ar'?'سلسلة النجمة من أكثر السلاسل لمعاناً وأناقة ⭐:':'Our luminous Star necklace ⭐:', [], match);
      }
      else if(lower.includes('قلب') || lower.includes('heart')){
        const match = products.filter(p => (p.name && (p.name.ar||'')).includes('قلب') || (p.name && (p.name.en||'')).toLowerCase().includes('heart'));
        addBotMessage(lang==='ar'?'سلسلة القلب، تعبير رقيق عن المشاعر الصادقة 💖:':'Our delicate Heart necklace 💖:', [], match);
      }
      else if(lower.includes('حرف') || lower.includes('initial') || lower.includes('letter')){
        const match = products.filter(p => (p.name && (p.name.ar||'')).includes('حرف') || (p.name && (p.name.en||'')).toLowerCase().includes('initial'));
        addBotMessage(lang==='ar'?'سلسلة الحرف، الخيار الأجمل للهدية الشخصية 🔤:':'Personalized Initial necklace 🔤:', [], match);
      }
      else if(lower.includes('وردة') || lower.includes('ورده') || lower.includes('flower')){
        const match = products.filter(p => (p.name && (p.name.ar||'')).includes('وردة') || (p.name && (p.name.en||'')).toLowerCase().includes('flower'));
        addBotMessage(lang==='ar'?'سلسلة الوردة، أنوثة ونعومة في كل تفصيلة 🌸:':'Our Flower necklace, timeless elegance 🌸:', [], match);
      }
      else if(lower.includes('شمس') || lower.includes('sun')){
        const match = products.filter(p => (p.name && (p.name.ar||'')).includes('شمس') || (p.name && (p.name.en||'')).toLowerCase().includes('sun'));
        addBotMessage(lang==='ar'?'سلسلة الشمس، إشراقة وجاذبية دافئة ☀️:':'Our vibrant Sun necklace ☀️:', [], match);
      }
      else if(lower.includes('ورقة') || lower.includes('ورقه') || lower.includes('leaf')){
        const match = products.filter(p => (p.name && (p.name.ar||'')).includes('ورقة') || (p.name && (p.name.en||'')).toLowerCase().includes('leaf'));
        addBotMessage(lang==='ar'?'سلسلة الورقة، تصميم طبيعي هادئ وأنيق 🍃:':'Our Leaf necklace, natural minimalism 🍃:', [], match);
      }
      else if(lower.includes('سعر') || lower.includes('اسعار') || lower.includes('بكام') || lower.includes('price') || lower.includes('cost')){
        processAction('INFO_PRICES', '');
      }
      else if(lower.includes('شحن') || lower.includes('توصيل') || lower.includes('محافظات') || lower.includes('delivery') || lower.includes('shipping')){
        addBotMessage(lang==='ar'
          ? 'التوصيل متاح لجميع محافظات مصر خلال 2 إلى 4 أيام عمل، والدفع عند الاستلام بعد فحص السلسلة 🚚.'
          : 'Delivery is available across Egypt within 2-4 business days with Cash on Delivery 🚚.'
        );
      }
      else if(lower.includes('حجز') || lower.includes('طلب') || lower.includes('اشتري') || lower.includes('order') || lower.includes('book')){
        addBotMessage(lang==='ar'
          ? 'يسعدنا جداً! اختاري السلسلة التي تودين حجزها وسأقوم بتأكيد الحجز معكِ خطوة بخطوة 🛍️:'
          : 'We would love to! Choose which necklace you want to book below 🛍️:',
          [], products.slice(0, 4)
        );
      }
      else {
        addBotMessage(lang==='ar'
          ? 'أنا هنا لمساعدتكِ في اختيار السلسلة المناسبة وحجزها فوراً! هل تحبين مشاهدة التشكيلة الأكثر طلباً أم تبحثين عن هدية معينة؟'
          : 'I am here to help you find and reserve your ideal necklace! Would you like to view our bestsellers or pick a gift?',
          lang==='ar'
            ? [
                { label: '🌟 الأكثر طلباً', action: 'SHOW_BESTSELLERS' },
                { label: '🎁 ترشيح هدية', action: 'REASON_GIFT' },
                { label: '👀 عرض كل السلاسل', action: 'SHOW_ALL' }
              ]
            : [
                { label: '🌟 Best Sellers', action: 'SHOW_BESTSELLERS' },
                { label: '🎁 Gift recommendation', action: 'REASON_GIFT' },
                { label: '👀 View all', action: 'SHOW_ALL' }
              ]
        );
      }
    }

    renderProducts(); saveCart(); updateNotifBadges(); updateCustomerNavUI(); updateAdminUI(!!(adminSession && adminSession.email === ADMIN_EMAIL));

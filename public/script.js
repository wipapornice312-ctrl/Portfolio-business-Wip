const TRANSLATIONS = {
  de: {
    moreLanguages: 'Weitere Sprachen',
    h1: 'Was kochen?',
    h2: 'Unsere Tagesempfehlung',
    p: 'Bitte geben Sie die Zutaten aus Ihrem Kühlschrank ein.',
    intro:
      'Keine Idee, was Sie kochen möchten? Wir können Ihnen helfen! Geben Sie einfach die Zutaten ein, die Sie zur Verfügung haben, und wir schlagen Ihnen leckere Rezepte vor.',
    placeholder: 'z.B. Hähnchen, Reis, Tomaten',
    mahlzeit: {
      'mahlzeit (Alle)': 'Mahlzeit (Alle)',
      'frühstück': 'Frühstück',
      mittagessen: 'Mittagessen',
      abendessen: 'Abendessen',
      snacks: 'Snacks',
      desserts: 'Desserts',
    },
    scharf: { '': 'Schärfe (Egal)', scharf: 'Scharf', nichtScharf: 'Nicht scharf' },
    geschmack: {
      '': 'Geschmack (Egal)',
      sauer: 'Sauer',
      salzig: 'Salzig',
      'süß': 'Süß',
      ausgewogen: 'Ausgewogen',
      mild: 'Mild',
    },
    vegan: { '': 'Vegan (Egal)', vegan: 'Vegan', vegetarisch: 'Vegetarisch' },
    filterSummary: 'Erweiterte Filter',
    button: 'Rezept finden',
    loading: 'Rezept wird erstellt...',
    noAnswer: 'Keine Antwort erhalten.',
    serverError: 'Verbindung zum Server fehlgeschlagen. Läuft server.js?',
  },
  en: {
    moreLanguages: 'More Languages',
    h1: 'What to cook?',
    h2: 'Our Daily Recommendation',
    p: 'Please enter the ingredients from your fridge.',
    intro:
      'No idea what to cook? We can help! Simply enter the ingredients you have available, and we will suggest delicious recipes for you.',
    placeholder: 'e.g. Chicken, Rice, Tomatoes',
    mahlzeit: {
      'mahlzeit (Alle)': 'Meal (All)',
      'frühstück': 'Breakfast',
      mittagessen: 'Lunch',
      abendessen: 'Dinner',
      snacks: 'Snacks',
      desserts: 'Desserts',
    },
    scharf: { '': 'Spiciness (Any)', scharf: 'Spicy', nichtScharf: 'Not spicy' },
    geschmack: {
      '': 'Taste (Any)',
      sauer: 'Sour',
      salzig: 'Salty',
      'süß': 'Sweet',
      ausgewogen: 'Balanced',
      mild: 'Mild',
    },
    vegan: { '': 'Vegan (Any)', vegan: 'Vegan', vegetarisch: 'Vegetarian' },
    filterSummary: 'Advanced Filters',
    button: 'Find recipe',
    loading: 'Creating recipe...',
    noAnswer: 'No response received.',
    serverError: 'Connection to server failed. Is server.js running?',
  },
  thai: {
    moreLanguages: 'ภาษาเพิ่มเติม',
    h1: 'วันนี้ทำอะไรกินดี?',
    h2: 'เมนูแนะนำประจำวัน',
    p: 'กรุณากรอกวัตถุดิบที่มีในตู้เย็นของคุณ',
    intro:
      'คิดไม่ออกว่าจะทำอะไรกินดีใช่ไหม? เราช่วยคุณได้! เพียงกรอกวัตถุดิบที่คุณมีอยู่ แล้วเราจะแนะนำสูตรอาหารแสนอร่อยให้คุณทันที',
    placeholder: 'เช่น ไก่, ข้าว, มะเขือเทศ',
    mahlzeit: {
      'mahlzeit (Alle)': 'มื้ออาหาร (ทั้งหมด)',
      'frühstück': 'มื้อเช้า',
      mittagessen: 'มื้อกลางวัน',
      abendessen: 'มื้อเย็น',
      snacks: 'ของว่าง',
      desserts: 'ของหวาน',
    },
    scharf: { '': 'ความเผ็ด (อะไรก็ได้)', scharf: 'เผ็ด', nichtScharf: 'ไม่เผ็ด' },
    geschmack: {
      '': 'รสชาติ (อะไรก็ได้)',
      sauer: 'เปรี้ยว',
      salzig: 'เค็ม',
      'süß': 'หวาน',
      ausgewogen: 'กลมกล่อม',
      mild: 'รสอ่อน',
    },
    vegan: { '': 'วีแกน (อะไรก็ได้)', vegan: 'วีแกน', vegetarisch: 'มังสวิรัติ' },
    filterSummary: 'ตัวกรองเพิ่มเติม',
    button: 'ค้นหาสูตรอาหาร',
    loading: 'กำลังสร้างสูตรอาหาร...',
    noAnswer: 'ไม่ได้รับคำตอบจากเซิร์ฟเวอร์',
    serverError: 'เชื่อมต่อเซิร์ฟเวอร์ไม่สำเร็จ กรุณาตรวจสอบว่า server.js กำลังทำงานอยู่',
  },
  fr: {
    moreLanguages: 'Autres langues',
    h1: 'Que cuisiner ?',
    h2: 'Notre recommandation du jour',
    p: 'Veuillez saisir les ingrédients de votre réfrigérateur.',
    intro:
      'Aucune idée de ce que vous voulez cuisiner ? Nous pouvons vous aider ! Saisissez simplement vos ingrédients et nous vous proposerons de délicieuses recettes.',
    placeholder: 'ex. Poulet, Riz, Tomates',
    mahlzeit: {
      'mahlzeit (Alle)': 'Repas (Tous)',
      'frühstück': 'Petit-déjeuner',
      mittagessen: 'Déjeuner',
      abendessen: 'Dîner',
      snacks: 'Snacks',
      desserts: 'Desserts',
    },
    scharf: { '': 'Piquant (Peu importe)', scharf: 'Épicé', nichtScharf: 'Non épicé' },
    geschmack: {
      '': 'Goût (Peu importe)',
      sauer: 'Acide',
      salzig: 'Salé',
      'süß': 'Sucré',
      ausgewogen: 'Équilibré',
      mild: 'Doux',
    },
    vegan: { '': 'Végan (Peu importe)', vegan: 'Végan', vegetarisch: 'Végétarien' },
    filterSummary: 'Filtres avancés',
    button: 'Trouver une recette',
    loading: 'Création de la recette...',
    noAnswer: 'Aucune réponse reçue.',
    serverError: 'Échec de connexion au serveur. server.js fonctionne-t-il ?',
  },
  chinesische: {
    moreLanguages: '更多语言',
    h1: '今天做什么菜？',
    h2: '每日推荐',
    p: '请输入您冰箱里的食材。',
    intro:
      '不知道做什么菜？我们来帮您！只需输入您现有的食材，我们就会为您推荐美味食谱。',
    placeholder: '例如：鸡肉、米饭、番茄',
    mahlzeit: {
      'mahlzeit (Alle)': '餐点（全部）',
      'frühstück': '早餐',
      mittagessen: '午餐',
      abendessen: '晚餐',
      snacks: '小吃',
      desserts: '甜点',
    },
    scharf: { '': '辣度（不限）', scharf: '辣', nichtScharf: '不辣' },
    geschmack: {
      '': '口味（不限）',
      sauer: '酸',
      salzig: '咸',
      'süß': '甜',
      ausgewogen: '均衡',
      mild: '清淡',
    },
    vegan: { '': '纯素（不限）', vegan: '纯素', vegetarisch: '素食' },
    filterSummary: '高级筛选',
    button: '查找食谱',
    loading: '正在生成食谱...',
    noAnswer: '未收到回复。',
    serverError: '连接服务器失败。server.js 正在运行吗？',
  },
  Italienische: {
    moreLanguages: 'Altre lingue',
    h1: 'Cosa cucinare?',
    h2: 'Il nostro consiglio del giorno',
    p: 'Inserisci gli ingredienti presenti nel tuo frigorifero.',
    intro:
      'Non sai cosa cucinare? Possiamo aiutarti! Inserisci gli ingredienti che hai a disposizione e ti suggeriremo ricette deliziose.',
    placeholder: 'es. Pollo, Riso, Pomodori',
    mahlzeit: {
      'mahlzeit (Alle)': 'Pasto (Tutti)',
      'frühstück': 'Colazione',
      mittagessen: 'Pranzo',
      abendessen: 'Cena',
      snacks: 'Snack',
      desserts: 'Dolci',
    },
    scharf: { '': 'Piccantezza (Indifferente)', scharf: 'Piccante', nichtScharf: 'Non piccante' },
    geschmack: {
      '': 'Gusto (Indifferente)',
      sauer: 'Aspro',
      salzig: 'Salato',
      'süß': 'Dolce',
      ausgewogen: 'Equilibrato',
      mild: 'Delicato',
    },
    vegan: { '': 'Vegano (Indifferente)', vegan: 'Vegano', vegetarisch: 'Vegetariano' },
    filterSummary: 'Filtri avanzati',
    button: 'Trova ricetta',
    loading: 'Creazione della ricetta...',
    noAnswer: 'Nessuna risposta ricevuta.',
    serverError: 'Connessione al server fallita. server.js è in esecuzione?',
  },
  spanische: {
    moreLanguages: 'Más idiomas',
    h1: '¿Qué cocinar?',
    h2: 'Nuestra recomendación del día',
    p: 'Por favor, introduce los ingredientes de tu nevera.',
    intro:
      '¿No sabes qué cocinar? ¡Podemos ayudarte! Solo introduce los ingredientes que tienes disponibles y te propondremos deliciosas recetas.',
    placeholder: 'ej. Pollo, Arroz, Tomates',
    mahlzeit: {
      'mahlzeit (Alle)': 'Comida (Todas)',
      'frühstück': 'Desayuno',
      mittagessen: 'Almuerzo',
      abendessen: 'Cena',
      snacks: 'Aperitivos',
      desserts: 'Postres',
    },
    scharf: { '': 'Picante (Cualquiera)', scharf: 'Picante', nichtScharf: 'Sin picante' },
    geschmack: {
      '': 'Sabor (Cualquiera)',
      sauer: 'Ácido',
      salzig: 'Salado',
      'süß': 'Dulce',
      ausgewogen: 'Equilibrado',
      mild: 'Suave',
    },
    vegan: { '': 'Vegano (Cualquiera)', vegan: 'Vegano', vegetarisch: 'Vegetariano' },
    filterSummary: 'Filtros avanzados',
    button: 'Buscar receta',
    loading: 'Creando receta...',
    noAnswer: 'No se recibió respuesta.',
    serverError: 'Error de conexión con el servidor. ¿Está ejecutándose server.js?',
  },
  arabische: {
    moreLanguages: 'لغات أخرى',
    h1: 'ماذا نطبخ اليوم؟',
    h2: 'توصيتنا اليومية',
    p: 'يرجى إدخال المكونات المتوفرة في ثلاجتك.',
    intro:
      'لا تعرف ماذا تطبخ؟ يمكننا مساعدتك! فقط أدخل المكونات المتوفرة لديك، وسنقترح عليك وصفات شهية.',
    placeholder: 'مثال: دجاج، أرز، طماطم',
    mahlzeit: {
      'mahlzeit (Alle)': 'الوجبة (الكل)',
      'frühstück': 'إفطار',
      mittagessen: 'غداء',
      abendessen: 'عشاء',
      snacks: 'وجبات خفيفة',
      desserts: 'حلويات',
    },
    scharf: { '': 'الحرارة (أي شيء)', scharf: 'حار', nichtScharf: 'غير حار' },
    geschmack: {
      '': 'الطعم (أي شيء)',
      sauer: 'حامض',
      salzig: 'مالح',
      'süß': 'حلو',
      ausgewogen: 'متوازن',
      mild: 'خفيف',
    },
    vegan: { '': 'نباتي (أي شيء)', vegan: 'نباتي صرف', vegetarisch: 'نباتي' },
    filterSummary: 'فلاتر متقدمة',
    button: 'ابحث عن وصفة',
    loading: 'جاري إنشاء الوصفة...',
    noAnswer: 'لم يتم استلام أي رد.',
    serverError: 'فشل الاتصال بالخادم. هل server.js يعمل؟',
  },
  japanische: {
    moreLanguages: 'その他の言語',
    h1: '何を作ろう？',
    h2: '本日のおすすめ',
    p: '冷蔵庫にある食材を入力してください。',
    intro:
      '何を作るか迷っていますか？お任せください！手元にある食材を入力するだけで、美味しいレシピをご提案します。',
    placeholder: '例：鶏肉、米、トマト',
    mahlzeit: {
      'mahlzeit (Alle)': '食事（すべて）',
      'frühstück': '朝食',
      mittagessen: '昼食',
      abendessen: '夕食',
      snacks: '軽食',
      desserts: 'デザート',
    },
    scharf: { '': '辛さ（指定なし）', scharf: '辛い', nichtScharf: '辛くない' },
    geschmack: {
      '': '味（指定なし）',
      sauer: '酸っぱい',
      salzig: 'しょっぱい',
      'süß': '甘い',
      ausgewogen: 'バランスが良い',
      mild: 'マイルド',
    },
    vegan: { '': 'ヴィーガン（指定なし）', vegan: 'ヴィーガン', vegetarisch: 'ベジタリアン' },
    filterSummary: '詳細フィルター',
    button: 'レシピを探す',
    loading: 'レシピを作成中...',
    noAnswer: '応答がありませんでした。',
    serverError: 'サーバーに接続できません。server.js は起動していますか？',
  },
  russische: {
    moreLanguages: 'Другие языки',
    h1: 'Что приготовить?',
    h2: 'Наша рекомендация дня',
    p: 'Пожалуйста, введите продукты из вашего холодильника.',
    intro:
      'Не знаете, что приготовить? Мы поможем! Просто введите имеющиеся продукты, и мы предложим вам вкусные рецепты.',
    placeholder: 'напр. Курица, Рис, Помидоры',
    mahlzeit: {
      'mahlzeit (Alle)': 'Приём пищи (Все)',
      'frühstück': 'Завтрак',
      mittagessen: 'Обед',
      abendessen: 'Ужин',
      snacks: 'Закуски',
      desserts: 'Десерты',
    },
    scharf: { '': 'Острота (Любая)', scharf: 'Острое', nichtScharf: 'Не острое' },
    geschmack: {
      '': 'Вкус (Любой)',
      sauer: 'Кислое',
      salzig: 'Солёное',
      'süß': 'Сладкое',
      ausgewogen: 'Сбалансированный',
      mild: 'Мягкий',
    },
    vegan: { '': 'Веган (Любой)', vegan: 'Веган', vegetarisch: 'Вегетарианское' },
    filterSummary: 'Расширенные фильтры',
    button: 'Найти рецепт',
    loading: 'Создание рецепта...',
    noAnswer: 'Ответ не получен.',
    serverError: 'Ошибка подключения к серверу. Запущен ли server.js?',
  },
  portugiesische: {
    moreLanguages: 'Outros idiomas',
    h1: 'O que cozinhar?',
    h2: 'Nossa recomendação do dia',
    p: 'Por favor, insira os ingredientes da sua geladeira.',
    intro:
      'Sem ideia do que cozinhar? Podemos ajudar! Basta inserir os ingredientes que você tem disponíveis e sugeriremos receitas deliciosas.',
    placeholder: 'ex. Frango, Arroz, Tomates',
    mahlzeit: {
      'mahlzeit (Alle)': 'Refeição (Todas)',
      'frühstück': 'Café da manhã',
      mittagessen: 'Almoço',
      abendessen: 'Jantar',
      snacks: 'Lanches',
      desserts: 'Sobremesas',
    },
    scharf: { '': 'Picância (Qualquer)', scharf: 'Picante', nichtScharf: 'Não picante' },
    geschmack: {
      '': 'Sabor (Qualquer)',
      sauer: 'Azedo',
      salzig: 'Salgado',
      'süß': 'Doce',
      ausgewogen: 'Equilibrado',
      mild: 'Suave',
    },
    vegan: { '': 'Vegano (Qualquer)', vegan: 'Vegano', vegetarisch: 'Vegetariano' },
    filterSummary: 'Filtros avançados',
    button: 'Encontrar receita',
    loading: 'Criando receita...',
    noAnswer: 'Nenhuma resposta recebida.',
    serverError: 'Falha na conexão com o servidor. O server.js está rodando?',
  },
  'holländische': {
    moreLanguages: 'Meer talen',
    h1: 'Wat gaan we koken?',
    h2: 'Onze aanbeveling van de dag',
    p: 'Vul de ingrediënten uit uw koelkast in.',
    intro:
      'Geen idee wat u wilt koken? Wij kunnen helpen! Vul eenvoudig de ingrediënten in die u in huis heeft, en wij stellen lekkere recepten voor.',
    placeholder: 'bijv. Kip, Rijst, Tomaten',
    mahlzeit: {
      'mahlzeit (Alle)': 'Maaltijd (Alle)',
      'frühstück': 'Ontbijt',
      mittagessen: 'Lunch',
      abendessen: 'Diner',
      snacks: 'Snacks',
      desserts: 'Desserts',
    },
    scharf: { '': 'Pittigheid (Maakt niet uit)', scharf: 'Pittig', nichtScharf: 'Niet pittig' },
    geschmack: {
      '': 'Smaak (Maakt niet uit)',
      sauer: 'Zuur',
      salzig: 'Zout',
      'süß': 'Zoet',
      ausgewogen: 'Uitgebalanceerd',
      mild: 'Mild',
    },
    vegan: { '': 'Vegan (Maakt niet uit)', vegan: 'Vegan', vegetarisch: 'Vegetarisch' },
    filterSummary: 'Uitgebreide filters',
    button: 'Recept vinden',
    loading: 'Recept wordt gemaakt...',
    noAnswer: 'Geen antwoord ontvangen.',
    serverError: 'Verbinding met server mislukt. Draait server.js?',
  },
  'türkische': {
    moreLanguages: 'Diğer diller',
    h1: 'Ne pişirsek?',
    h2: 'Günün önerisi',
    p: 'Lütfen buzdolabınızdaki malzemeleri girin.',
    intro:
      'Ne pişireceğinize karar veremiyor musunuz? Yardımcı olabiliriz! Elinizdeki malzemeleri girin, size lezzetli tarifler önerelim.',
    placeholder: 'örn. Tavuk, Pirinç, Domates',
    mahlzeit: {
      'mahlzeit (Alle)': 'Öğün (Tümü)',
      'frühstück': 'Kahvaltı',
      mittagessen: 'Öğle yemeği',
      abendessen: 'Akşam yemeği',
      snacks: 'Atıştırmalık',
      desserts: 'Tatlılar',
    },
    scharf: { '': 'Acılık (Fark etmez)', scharf: 'Acı', nichtScharf: 'Acısız' },
    geschmack: {
      '': 'Tat (Fark etmez)',
      sauer: 'Ekşi',
      salzig: 'Tuzlu',
      'süß': 'Tatlı',
      ausgewogen: 'Dengeli',
      mild: 'Hafif',
    },
    vegan: { '': 'Vegan (Fark etmez)', vegan: 'Vegan', vegetarisch: 'Vejetaryen' },
    filterSummary: 'Gelişmiş filtreler',
    button: 'Tarif bul',
    loading: 'Tarif oluşturuluyor...',
    noAnswer: 'Yanıt alınamadı.',
    serverError: 'Sunucuya bağlanılamadı. server.js çalışıyor mu?',
  },
};

function updateSelectOptions(selectId, map) {
  const select = document.getElementById(selectId);
  if (!select || !map) return;
  Array.from(select.options).forEach((opt) => {
    if (map[opt.value] !== undefined) {
      opt.textContent = map[opt.value];
    }
  });
}

function updatePageLanguage() {
  const languageEl = document.getElementById('sprache');
  const langKey = languageEl ? languageEl.value : 'de';
  const t = TRANSLATIONS[langKey] || TRANSLATIONS.de;

  document.documentElement.dir = langKey === 'arabische' ? 'rtl' : 'ltr';

  const optgroup = document.querySelector('#sprache optgroup');
  if (optgroup) optgroup.label = t.moreLanguages;

  const h1 = document.querySelector('h1');
  if (h1) h1.textContent = t.h1;

  const h2 = document.querySelector('h2');
  if (h2) h2.textContent = t.h2;

  const p = document.querySelector('p');
  if (p) p.textContent = t.p;

  const introDiv = document.querySelector('p + div');
  if (introDiv) introDiv.textContent = t.intro;

  const zutatenEl = document.getElementById('zutaten');
  if (zutatenEl) zutatenEl.placeholder = t.placeholder;

  updateSelectOptions('mahlzeit', t.mahlzeit);
  updateSelectOptions('scharf', t.scharf);
  updateSelectOptions('geschmack', t.geschmack);
  updateSelectOptions('vegan', t.vegan);

  const filterSummary = document.querySelector('details summary');
  if (filterSummary) filterSummary.textContent = t.filterSummary;

  const btn =
    document.querySelector('button[onclick*="rezeptVorschlag"]') ||
    document.querySelector('button');
  if (btn) btn.textContent = t.button;
}

function initLanguage() {
  const languageEl = document.getElementById('sprache');
  if (languageEl) {
    languageEl.addEventListener('change', updatePageLanguage);
    updatePageLanguage();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}

async function rezeptVorschlag() {
  const languageEl = document.getElementById('sprache');
  const langKey = languageEl ? languageEl.value : 'de';
  const t = TRANSLATIONS[langKey] || TRANSLATIONS.de;
  const selectedLanguage = languageEl
    ? languageEl.options[languageEl.selectedIndex].text.trim()
    : 'Deutsch';

  const zutaten = document.getElementById('zutaten')?.value.trim() || '';
  const mahlzeit = document.getElementById('mahlzeit')?.value || '';
  const schaerfe = document.getElementById('scharf')?.value || '';
  const geschmack = document.getElementById('geschmack')?.value || '';
  const vegan = document.getElementById('vegan')?.value || '';

  const zeitEl =
    document.getElementById('zubereitungszeit') ||
    document.getElementById('zeit');
  const zubereitungszeit = zeitEl ? zeitEl.value : '';

  const kalorien = document.getElementById('kalorien')?.value || '';

  const allergeneChecked = Array.from(
    document.querySelectorAll('details input[type="checkbox"]:checked')
  ).map((cb) => cb.value || cb.parentElement.textContent.trim());
  const allergeneEl = document.getElementById('allergene');
  const allergene =
    allergeneChecked.length > 0
      ? allergeneChecked.join(', ')
      : allergeneEl
        ? allergeneEl.value
        : '';

  const ergebnisDiv =
    document.getElementById('ergebnis') ||
    document.getElementById('rezept') ||
    document.getElementById('antwort') ||
    document.getElementById('output');

  if (ergebnisDiv) {
    ergebnisDiv.textContent = t.loading;
  }

  try {
    const response = await fetch('/rezept', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        zutaten,
        mahlzeit,
        schaerfe,
        geschmack,
        vegan,
        zubereitungszeit,
        kalorien,
        allergene,
        language: selectedLanguage,
      }),
    });

    const data = await response.json();

    if (ergebnisDiv) {
      ergebnisDiv.textContent =
        data.recipe || data.rezept || data.error || t.noAnswer;
    }
  } catch (error) {
    console.error(error);
    if (ergebnisDiv) {
      ergebnisDiv.textContent = t.serverError;
    }
  }
}
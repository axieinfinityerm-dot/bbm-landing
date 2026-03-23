// Mock data for BBM Grup Proje Landing Page

export const services = [
  {
    id: 1,
    title: "Altyapı Projeleri",
    description: "Şehirlerin yaşam damarlarını, mühendislik titizliği ve yenilikçi çözümlerle hayata geçiriyoruz.",
    icon: "layers"
  },
  {
    id: 2,
    title: "Elektrik Projeleri",
    description: "Enerji verimliliğini, güvenliği ve modern teknolojiyi bir araya getirerek geleceğe ışık tutuyoruz.",
    icon: "zap"
  },
  {
    id: 3,
    title: "Haritacılık Hizmetleri",
    description: "Doğru ölçüm ve hassas analizlerle projelerin temelini sağlam veriler üzerine inşa ediyoruz.",
    icon: "map"
  },
  {
    id: 4,
    title: "İmar, Kamulaştırma, Parselleme",
    description: "Hukuki ve teknik süreçleri kusursuz yöneterek arazilerin projeye hazır hale gelmesini sağlıyoruz.",
    icon: "file-text"
  },
  {
    id: 5,
    title: "Kübaj Hesapları",
    description: "Hassas ölçümler ve detaylı analizlerle hafriyat ve dolgu miktarlarını kesin olarak hesaplıyoruz.",
    icon: "calculator"
  },
  {
    id: 6,
    title: "Mekanik Projeler",
    description: "Konfor, verimlilik ve güvenlik odaklı mekanik sistem çözümlerini uzman mühendislik yaklaşımıyla sunuyoruz.",
    icon: "settings"
  },
  {
    id: 7,
    title: "Mimari Projeler",
    description: "Estetik, işlevsellik ve sürdürülebilirliği harmanlayarak ilham veren yaşam alanları tasarlıyoruz.",
    icon: "building-2"
  },
  {
    id: 8,
    title: "Peyzaj Projeleri",
    description: "Doğanın güzelliklerini modern tasarım anlayışıyla bütünleştirerek estetik ve uyumlu dış mekanlar yaratıyoruz.",
    icon: "trees"
  },
  {
    id: 9,
    title: "Plankote Alımları",
    description: "Projelerin onay süreçlerini hızlandırmak için plankote işlemlerini profesyonelce yönetiyoruz.",
    icon: "clipboard-check"
  },
  {
    id: 10,
    title: "Sayısal 3B Akıllı Şehir Modellemesi",
    description: "Modern teknolojilerle şehirlerin dijital ikizlerini oluşturarak akıllı planlama ve yönetim sağlıyoruz.",
    icon: "box"
  },
  {
    id: 11,
    title: "Statik Projeler",
    description: "Güvenli, dayanıklı ve uzun ömürlü yapılar için mühendislik hesaplarını hassasiyetle gerçekleştiriyoruz.",
    icon: "shield-check"
  },
  {
    id: 12,
    title: "Yaklaşık Maliyet Dosyası",
    description: "Projelerin bütçe planlamasını doğru ve şeffaf maliyet analizleriyle destekliyoruz.",
    icon: "coins"
  }
];

export const features = [
  {
    id: 1,
    number: "01",
    title: "Konsept Tasarım",
    description: "Mühendislik, inşaat ve tasarım disiplinlerinin ve uzmanlığının benzersiz bir birleşimiyle."
  },
  {
    id: 2,
    number: "02",
    title: "Şematik Çizimler",
    description: "İç mekan tasarımı, bazen dış mekan da dahil olmak üzere, bir mekanın iç mekanlarını geliştirme sanatı ve bilimidir."
  },
  {
    id: 3,
    number: "03",
    title: "Proje Yönetimi",
    description: "BBM Grup Proje, çoğunluğu proje sahalarında olmak üzere 1100'den fazla çalışanı istihdam etmektedir."
  }
];

export const stats = [
  {
    id: 1,
    value: "78",
    suffix: "%",
    label: "Tekrarlayan Müşteriler"
  },
  {
    id: 2,
    value: "200",
    suffix: "+",
    label: "Tamamlanan Projeler"
  },
  {
    id: 3,
    value: "2",
    suffix: "M",
    label: "Projesi Çizilen Metrekare"
  },
  {
    id: 4,
    value: "4",
    suffix: "",
    label: "Ödüllü Proje"
  }
];

export const ayyildizProject = {
  title: "Malatya Ayyıldız Projesi",
  subtitle: "Molozların Üstünde Umut",
  description: "Büyük Malatya Depremi'nin ardından şehir sustu; sadece molozlar değil, hatıralar da yerle bir olmuştu. Ancak zamanla sessizliğin içinden bir fikir doğdu. Toprağın altına gömülen her şeyin üzerine, umutla bir yapı inşa edilmeliydi. Ayyıldız Projesi bu düşünceden doğdu; bir rekreasyon alanı değil, hafızası olan bir yer olarak tasarlandı. Mekânın formu, Türk bayrağının dalgalanışından ilham aldı. Çünkü bu proje sadece toprağa değil, ruhlara da dokunmalıydı."
};

export const partnerLogos = [
  "100-",
  "logo-dark",
  "830-",
  "898-",
  "302-durmaz-gayrimenkul",
  "823-",
  "SELER",
  "652126e75924f530566934",
  "dorce"
];

export const contactFormSubmit = (formData) => {
  // Mock form submission
  console.log("Form submitted:", formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Mesajınız başarıyla gönderildi!" });
    }, 1000);
  });
};

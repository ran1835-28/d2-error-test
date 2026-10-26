// SAFE TAILWIND CONFIGURATION SETUP
window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cinzel', 'Georgia', 'serif'],
                amiri: ['Amiri', 'serif'],
                scheherazade: ['Scheherazade New', 'serif'],
                ruqaa: ['Aref Ruqaa', 'serif'],
            },
            colors: {
                brand: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    500: '#10b981',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                amberGold: '#d97706',
            }
        }
    }
};

// TRANSLATION DICTIONARY FOR UI LABELS
const translations = {
    en: {
        headerTitle: "Al-Hikmah Journal",
        headerBadge: "Wisdom & Heritage",
        headerSub: "Islamic Inscriptions, Prophetic Traditions & Golden Age Discoveries",
        streakDays: "Day Streak",
        btnArch3Layer: "3-Layer Arch",
        btnSavedMs: "Saved",
        btnSessionLedger: "Ledger",
        
        lblDomainFocus: "Knowledge Domain Focus:",
        optAll: "📖 All Knowledge Traditions",
        optQuran: "📖 Noble Quran (Revelation)",
        optHadith: "📜 Prophetic Sunnah (Hadith)",
        optWisdom: "🧘 Classical Scholars & Ethics",
        optScience: "🔬 Golden Age Science & History",
        
        lblCalligraphyScript: "Arabic Calligraphy Style:",
        btnRetrievePair: "Retrieve Knowledge Pair",
        lblEraScrub: "Chronological Timeline Scrub:",
        selectedEraLabelAll: "All Historical Eras",
        eraAll: "All Eras",
        era7th: "7th C. (Revelation)",
        era9th: "9th C. (Baghdad Wisdom)",
        era10th: "10th C. (Golden Age)",
        era11th: "11th-12th C. (Andalusia & Persia)",
        
        lblSpiritual: "Spiritual Inscription:",
        lblEmpirical: "Empirical Finding:",
        lblHarmoniousSynth: "Harmonious Synthesis",
        
        badgeSacredText: "Sacred Text / Inscription",
        badgeHistoricalObs: "Historical & Empirical Observation",
        lblPrimarySource: "Primary Source & Attributed Narrator:",
        lblCitedSource: "Cited Historical / Academic Source:",
        btnChainIsnad: "Chain (Isnad)",
        badgePeerVerified: "Peer-Verified",
        btnSaveInscription: "Save Inscription",
        btnSaveObservation: "Save Observation",
        btnSavedItem: "Saved",
        
        titleSynthesis: "Synthesis & Philosophical Reflection Prompt",
        badgeTafakkur: "Contemplation Engine (Tafakkur)",
        btnCopyPrompt: "Copy Reflection Prompt",
        btnNewSynthesis: "New Synthesis Question",
        btnQuizMode: "Take Knowledge Quiz",

        quizTitle: "Islamic Wisdom & Science Quiz",
        quizSubtitle: "Test your understanding of classical inscriptions, scientific breakthroughs, and historical chains.",
        quizQuestionCount: "Question",
        quizOf: "of",
        quizScore: "Score",
        quizNext: "Next Question",
        quizRestart: "Restart Quiz",
        quizResultsTitle: "Quiz Completed!",
        quizYourScore: "Your Final Score:",
        quizPerfectScore: "MashaAllah! Outstanding mastery of Islamic heritage and science!",
        quizGoodScore: "Great job! Strong knowledge of historical traditions.",
        quizKeepLearning: "Good effort! Keep exploring the Al-Hikmah manuscript ledger.",

        savedTitle: "Saved Manuscripts & Observations",
        savedSubtitle: "Your personal library of bookmarked inscriptions, scientific records, and citations.",
        savedEmpty: "No saved manuscripts yet. Click save on any card to store items here.",
        btnExportCsv: "Export CSV",
        btnExportJson: "Export JSON",
        btnClearAllSaved: "Clear All",
        badgeTypeInscription: "Inscription",
        badgeTypeObservation: "Observation",
        btnDelete: "Remove",

        auditTitle: "Session Audit Ledger & Telemetry",
        auditSubtitle: "Real-time system logging, architectural telemetry, and integrity hashes (MGIS130 Compliance).",
        lblTotalRetrieved: "Total Retrieved",
        lblTotalSaved: "Total Saved",
        lblActiveTheme: "Active Mode",
        lblSystemStatus: "System Status",
        thTimestamp: "Timestamp",
        thAction: "Action / Event",
        thDomain: "Domain",
        thDetail: "Details",
        thProofHash: "Hash",
        auditEmpty: "No session logs generated yet.",
        btnClearLogs: "Clear Logs",
        btnPrintLedger: "Print Report",

        archTitle: "3-Layer Software Architecture Specification",
        archSubtitle: "MGIS130 Enterprise Architecture mapping: User Interface, Business Processing, and Data Access Layers.",
        archLayer1: "Layer 1: User Interface (UI)",
        archLayer1Desc: "Tailwind CSS, Responsive Canvas, Dynamic Themes, Web Speech TTS Synthesis, i18n Localization.",
        archLayer2: "Layer 2: Business Logic & Processing",
        archLayer2Desc: "Equilibrium Engine (Spiritual vs Empirical balance), Contemplation Generator, Isnad Network Graph, Era Chronology Filtering.",
        archLayer3: "Layer 3: Data Access & Persistence",
        archLayer3Desc: "Structured Inscriptions & History DB, Session Ledger Audit Hash Verification, Local Favorites Persistence Engine.",
        btnClose: "Close",

        isnadTitle: "Chain of Transmission (Isnad)",
        isnadSubtitle: "Visualizing biographical evaluation (Ilm al-Rijal) and transmission lineage.",
        isnadAuthenticity: "Authenticity Grade:",
        isnadGradeSahih: "Sahih (Rigorously Verified)",

        toastCopiedPrompt: "Reflection prompt copied to clipboard!",
        toastCopiedText: "Text & citation copied to clipboard!",
        toastSaved: "Item saved to your Manuscripts Library!",
        toastRemoved: "Item removed from Saved Manuscripts.",
        toastLogsCleared: "Session audit ledger cleared.",
        toastAudioError: "Speech synthesis error or unsupported browser voice."
    },
    ar: {
        headerTitle: "مجلة الحكمة",
        headerBadge: "الحكمة والتراث",
        headerSub: "النقوش الإسلامية، السنة النبوية، والاكتشافات العلمية في العصر الذهبي",
        streakDays: "أيام متتالية",
        btnArch3Layer: "معمارية النظام",
        btnSavedMs: "المحفوظات",
        btnSessionLedger: "سجل الجلسة",
        
        lblDomainFocus: "المجال المعرفي:",
        optAll: "📖 جميع العلوم والمعارف",
        optQuran: "📖 القرآن الكريم (الوحي)",
        optHadith: "📜 السنة النبوية الشريفة",
        optWisdom: "🧘 علم الأخلاق والحكمة الكلاسيكية",
        optScience: "🔬 علوم التاريخ والفيزياء والفلك",
        
        lblCalligraphyScript: "الخط العربي:",
        btnRetrievePair: "استرجاع زوج معرفي",
        lblEraScrub: "التصفح الزمني والعصور:",
        selectedEraLabelAll: "جميع العصور التاريخية",
        eraAll: "جميع العصور",
        era7th: "القرن ٧ (عصر النبوة والوحي)",
        era9th: "القرن ٩ (بيت الحكمة بغداد)",
        era10th: "القرن ١٠ (العصر الذهبي)",
        era11th: "القرن ١١-١٢ (الأندلس وفارس)",
        
        lblSpiritual: "النقش المقدس:",
        lblEmpirical: "الملاحظة العلمية:",
        lblHarmoniousSynth: "تركيب متوازن ومشهود",
        
        badgeSacredText: "نص مقدس / نقش شريف",
        badgeHistoricalObs: "ملاحظة تاريخية وعلمية تجريبية",
        lblPrimarySource: "المصدر الأصلي والراوي المسند:",
        lblCitedSource: "المصدر الأكاديمي والتاريخي الموثق:",
        btnChainIsnad: "سلسلة الإسناد",
        badgePeerVerified: "مُحقق ومراجع",
        btnSaveInscription: "حفظ النقش",
        btnSaveObservation: "حفظ الملاحظة",
        btnSavedItem: "تم الحفظ",
        
        titleSynthesis: "سؤال التأمل والتركيب الفلسفي",
        badgeTafakkur: "محرك التفكر والاعتبار",
        btnCopyPrompt: "نسخ سؤال التفكر",
        btnNewSynthesis: "توليد سؤال تفكر جديد",
        btnQuizMode: "اختبار المعرفة التفاعلي",

        quizTitle: "اختبار العلوم والحكمة الإسلامية",
        quizSubtitle: "اختبر معرفتك بالنقوش الكلاسيكية، الاكتشافات العلمية، وسلاسل الرواية التاريخية.",
        quizQuestionCount: "السؤال",
        quizOf: "من",
        quizScore: "النتيجة",
        quizNext: "السؤال التالي",
        quizRestart: "إعادة الاختبار",
        quizResultsTitle: "اكتمل الاختبار!",
        quizYourScore: "نتيجتك النهائية:",
        quizPerfectScore: "ما شاء الله! إتقان متميز للتراث والحضارة الإسلامية!",
        quizGoodScore: "عمل ممتاز! معرفة قوية بالتاريخ والعلوم.",
        quizKeepLearning: "جهد طيب! واصل استكشاف مخطوطات مجلة الحكمة.",

        savedTitle: "المخطوطات والملاحظات المحفوظة",
        savedSubtitle: "مكتبتك الخاصة للنصوص المحفوظة، السجلات العلمية، والمراجع التاريخية.",
        savedEmpty: "لا توجد مخطوطات محفوظة حتى الآن. انقر على أيقونة الإشارة المرجعية للحفظ.",
        btnExportCsv: "تصدير CSV",
        btnExportJson: "تصدير JSON",
        btnClearAllSaved: "مسح الكل",
        badgeTypeInscription: "نقش مقدس",
        badgeTypeObservation: "ملاحظة علمية",
        btnDelete: "حذف",

        auditTitle: "سجل تدقيق الجلسة وقياس النظام",
        auditSubtitle: "تسجيل العمليات، التدقيق الهيكلي، والتشفير البرمجي (معيار MGIS130).",
        lblTotalRetrieved: "إجمالي الاسترجاعات",
        lblTotalSaved: "إجمالي المحفوظات",
        lblActiveTheme: "الطراز النشط",
        lblSystemStatus: "حالة النظام",
        thTimestamp: "الرمز الزمني",
        thAction: "الحدث / العملية",
        thDomain: "المجال المعرفي",
        thDetail: "تفاصيل العملية",
        thProofHash: "تشفير الإثبات",
        auditEmpty: "لم يتم إنشاء سجلات تدقيق في هذه الجلسة بعد.",
        btnClearLogs: "مسح سجل التدقيق",
        btnPrintLedger: "طباعة تقرير السجل",

        archTitle: "مواصفات المعمارية البرمجية ثلاثية الطبقات",
        archSubtitle: "تخطيط المعمارية المؤسسية: طبقة الواجهة، طبقة المعالجة، وطبقة البيانات.",
        archLayer1: "الطبقة الأولى: واجهة المستخدم (UI)",
        archLayer1Desc: "تصميم متجاوب، أنماط متغيرة، تحويل النص إلى صوت، ودعم اللغات متعددة.",
        archLayer2: "الطبقة الثانية: المنطق والمعالجة",
        archLayer2Desc: "محرك التوازن بين الروحاني والتجريبي، مولد سؤال التفكر، شبكة الإسناد، والتصفية الزمنية.",
        archLayer3: "الطبقة الثالثة: الوصول إلى البيانات والتخزين",
        archLayer3Desc: "قاعدة بيانات النقوش والسير، التحقق من السجل بدالة التشفير، ومحرك التخزين المحلي.",
        btnClose: "إغلاق",

        isnadTitle: "سلسلة الإسناد والتحليل الراوي",
        isnadSubtitle: "توضيح علم الرجال وتقييم درجات التوثيق والاتصال.",
        isnadAuthenticity: "درجة الصحة:",
        isnadGradeSahih: "صحيح (مُحقق ومتصل الإسناد)",

        toastCopiedPrompt: "تم نسخ سؤال التفكر إلى الحافظة!",
        toastCopiedText: "تم نسخ النص والمصدر إلى الحافظة!",
        toastSaved: "تم حفظ العنصر إلى مكتبة المخطوطات!",
        toastRemoved: "تم إزالة العنصر من المخطوطات المحفوظة.",
        toastLogsCleared: "تم مسح سجل تدقيق الجلسة.",
        toastAudioError: "خطأ في قراءة الصوت أو المتصفح لا يدعم هذا الصوت."
    },
    es: {
        headerTitle: "Revista Al-Hikmah",
        headerBadge: "Sabiduría y Patrimonio",
        headerSub: "Inscripciones Islámicas, Tradiciones Proféticas y Descubrimientos de la Edad de Oro",
        streakDays: "Días Seguidos",
        btnArch3Layer: "Arq. 3 Capas",
        btnSavedMs: "Guardados",
        btnSessionLedger: "Libro Mayor",
        
        lblDomainFocus: "Enfoque del Dominio del Conocimiento:",
        optAll: "📖 Todas las Tradiciones del Conocimiento",
        optQuran: "📖 Noble Corán (Revelación)",
        optHadith: "📜 Sunnah Profética (Hadiz)",
        optWisdom: "🧘 Ética y Sabios Clásicos",
        optScience: "🔬 Ciencia e Historia de la Edad de Oro",
        
        lblCalligraphyScript: "Estilo de Caligrafía Árabe:",
        btnRetrievePair: "Obtener Par de Conocimiento",
        lblEraScrub: "Línea de Tiempo Cronológica:",
        selectedEraLabelAll: "Todas las Eras Históricas",
        eraAll: "Todas las Eras",
        era7th: "Siglo VII (Revelación)",
        era9th: "Siglo IX (Sabiduría de Bagdad)",
        era10th: "Siglo X (Edad de Oro)",
        era11th: "Siglos XI-XII (Andalucía y Persia)",
        
        lblSpiritual: "Inscripción Espiritual:",
        lblEmpirical: "Hallazgo Empírico:",
        lblHarmoniousSynth: "Síntesis Armónica",
        
        badgeSacredText: "Texto Sagrado / Inscripción",
        badgeHistoricalObs: "Observación Histórica y Empírica",
        lblPrimarySource: "Fuente Primaria y Narrador Atribuido:",
        lblCitedSource: "Fuente Histórica / Académica Citada:",
        btnChainIsnad: "Cadena (Isnad)",
        badgePeerVerified: "Verificado por Pares",
        btnSaveInscription: "Guardar Inscripción",
        btnSaveObservation: "Guardar Observación",
        btnSavedItem: "Guardado",
        
        titleSynthesis: "Pregunta de Reflexión Filosófica y Síntesis",
        badgeTafakkur: "Motor de Contemplación (Tafakkur)",
        btnCopyPrompt: "Copiar Pregunta de Reflexión",
        btnNewSynthesis: "Nueva Pregunta de Síntesis",
        btnQuizMode: "Hacer Cuestionario de Conocimiento",

        quizTitle: "Cuestionario de Sabiduría y Ciencia Islámica",
        quizSubtitle: "Pon a prueba tu comprensión de inscripciones clásicas, avances científicos y cadenas históricas.",
        quizQuestionCount: "Pregunta",
        quizOf: "de",
        quizScore: "Puntuación",
        quizNext: "Siguiente Pregunta",
        quizRestart: "Reiniciar Cuestionario",
        quizResultsTitle: "¡Cuestionario Completado!",
        quizYourScore: "Tu Puntuación Final:",
        quizPerfectScore: "¡MashaAllah! ¡Excelente dominio del patrimonio y la ciencia islámica!",
        quizGoodScore: "¡Gran trabajo! Buen conocimiento de las tradiciones históricas.",
        quizKeepLearning: "¡Buen esfuerzo! Sigue explorando el registro de manuscritos de Al-Hikmah.",

        savedTitle: "Manuscritos y Observaciones Guardados",
        savedSubtitle: "Tu biblioteca personal de inscripciones marcadas, registros científicos y citas.",
        savedEmpty: "Aún no hay manuscritos guardados. Haz clic en guardar en cualquier tarjeta.",
        btnExportCsv: "Exportar CSV",
        btnExportJson: "Exportar JSON",
        btnClearAllSaved: "Borrar Todo",
        badgeTypeInscription: "Inscripción",
        badgeTypeObservation: "Observación",
        btnDelete: "Eliminar",

        auditTitle: "Libro Mayor de Auditoría y Telemetría de la Sesión",
        auditSubtitle: "Registro del sistema en tiempo real, telemetría arquitectónica y hashes de integridad (Cumplimiento MGIS130).",
        lblTotalRetrieved: "Total Recuperado",
        lblTotalSaved: "Total Guardado",
        lblActiveTheme: "Modo Activo",
        lblSystemStatus: "Estado del Sistema",
        thTimestamp: "Marca de Tiempo",
        thAction: "Acción / Evento",
        thDomain: "Dominio",
        thDetail: "Detalles",
        thProofHash: "Hash",
        auditEmpty: "Aún no se han generado registros de sesión.",
        btnClearLogs: "Borrar Registros",
        btnPrintLedger: "Imprimir Informe",

        archTitle: "Especificación de Arquitectura de Software de 3 Capas",
        archSubtitle: "Mapeo de arquitectura empresarial MGIS130: Interfaz de Usuario, Procesamiento de Negocio y Acceso a Datos.",
        archLayer1: "Capa 1: Interfaz de Usuario (UI)",
        archLayer1Desc: "Tailwind CSS, Lienzo Responsivo, Temas Dinámicos, Síntesis de Voz Web TTS, Localización i18n.",
        archLayer2: "Capa 2: Lógica de Negocio y Procesamiento",
        archLayer2Desc: "Motor de Equilibrio (Balance Espiritual vs Empírico), Generador de Contemplación, Grafo de Red Isnad, Filtro Cronológico de Eras.",
        archLayer3: "Capa 3: Acceso a Datos y Persistencia",
        archLayer3Desc: "Base de Datos Estructurada de Inscripciones e Historia, Verificación de Hash de Auditoría, Motor de Persistencia Local.",
        btnClose: "Cerrar",

        isnadTitle: "Cadena de Transmisión (Isnad)",
        isnadSubtitle: "Visualización de la evaluación biográfica (Ilm al-Rijal) y el linaje de transmisión.",
        isnadAuthenticity: "Grado de Autenticidad:",
        isnadGradeSahih: "Sahih (Rigurosamente Verificado)",

        toastCopiedPrompt: "¡Pregunta de reflexión copiada al portapapeles!",
        toastCopiedText: "¡Texto y cita copiados al portapapeles!",
        toastSaved: "¡Elemento guardado en tu Biblioteca de Manuscritos!",
        toastRemoved: "Elemento eliminado de Manuscritos Guardados.",
        toastLogsCleared: "Libro mayor de auditoría borrado.",
        toastAudioError: "Error de síntesis de voz o navegador no compatible."
    },
    fr: {
        headerTitle: "Revue Al-Hikmah",
        headerBadge: "Sagesse & Patrimoine",
        headerSub: "Inscriptions Islamiques, Traditions Prophétiques & Découvertes de l'Âge d'Or",
        streakDays: "Jours Conécutifs",
        btnArch3Layer: "Arch. 3 Couches",
        btnSavedMs: "Enregistrés",
        btnSessionLedger: "Registre de Session",
        
        lblDomainFocus: "Domaine de Connaissance :",
        optAll: "📖 Toutes les Traditions de Connaissance",
        optQuran: "📖 Noble Coran (Révélation)",
        optHadith: "📜 Sunnah Prophétique (Hadith)",
        optWisdom: "🧘 Éthique & Savants Classiques",
        optScience: "🔬 Science & Histoire de l'Âge d'Or",
        
        lblCalligraphyScript: "Style de Calligraphie Arabe :",
        btnRetrievePair: "Obtenir une Paire de Connaissances",
        lblEraScrub: "Frise Chronologique :",
        selectedEraLabelAll: "Toutes les Époques Historiques",
        eraAll: "Toutes les Époques",
        era7th: "VIIe S. (Révélation)",
        era9th: "IXe S. (Sagesse de Bagdad)",
        era10th: "Xe S. (Âge d'Or)",
        era11th: "XIe-XIIe S. (Andalousie & Perse)",
        
        lblSpiritual: "Inscription Spirituelle :",
        lblEmpirical: "Constat Empirique :",
        lblHarmoniousSynth: "Synthèse Harmonieuse",
        
        badgeSacredText: "Texte Sacré / Inscription",
        badgeHistoricalObs: "Observation Historique & Empirique",
        lblPrimarySource: "Source Primaire & Narrateur Attribué :",
        lblCitedSource: "Source Historique / Académique Citée :",
        btnChainIsnad: "Chaîne (Isnad)",
        badgePeerVerified: "Vérifié par des Pairs",
        btnSaveInscription: "Enregistrer l'Inscription",
        btnSaveObservation: "Enregistrer l'Observation",
        btnSavedItem: "Enregistré",
        
        titleSynthesis: "Sujet de Réflexion Philosophique & Synthèse",
        badgeTafakkur: "Moteur de Contemplation (Tafakkur)",
        btnCopyPrompt: "Copier le Sujet de Réflexion",
        btnNewSynthesis: "Nouveau Sujet de Synthèse",
        btnQuizMode: "Passer le Quiz de Connaissances",

        quizTitle: "Quiz sur la Sagesse & la Science Islamiques",
        quizSubtitle: "Testez vos connaissances sur les inscriptions classiques, les découvertes scientifiques et les chaînes historiques.",
        quizQuestionCount: "Question",
        quizOf: "sur",
        quizScore: "Score",
        quizNext: "Question Suivante",
        quizRestart: "Recommencer le Quiz",
        quizResultsTitle: "Quiz Terminé !",
        quizYourScore: "Votre Score Final :",
        quizPerfectScore: "MashaAllah ! Maîtrise exceptionnelle du patrimoine et de la science islamiques !",
        quizGoodScore: "Excellent travail ! Solides connaissances des traditions historiques.",
        quizKeepLearning: "Bon effort ! Continuez à explorer les manuscrits d'Al-Hikmah.",

        savedTitle: "Manuscrits & Observations Enregistrés",
        savedSubtitle: "Votre bibliothèque personnelle d'inscriptions, de données scientifiques et de citations.",
        savedEmpty: "Aucun manuscrit enregistré pour le moment. Cliquez sur enregistrer sur une carte.",
        btnExportCsv: "Exporter en CSV",
        btnExportJson: "Exporter en JSON",
        btnClearAllSaved: "Tout Effacer",
        badgeTypeInscription: "Inscription",
        badgeTypeObservation: "Observation",
        btnDelete: "Supprimer",

        auditTitle: "Registre d'Audit de Session & Télémétrie",
        auditSubtitle: "Journalisation en temps réel, télémétrie architecturale et hachages d'intégrité (Conformité MGIS130).",
        lblTotalRetrieved: "Total Récupéré",
        lblTotalSaved: "Total Enregistré",
        lblActiveTheme: "Mode Actif",
        lblSystemStatus: "État du Système",
        thTimestamp: "Horodatage",
        thAction: "Action / Événement",
        thDomain: "Domaine",
        thDetail: "Détails",
        thProofHash: "Hachage",
        auditEmpty: "Aucun journal de session généré pour le moment.",
        btnClearLogs: "Effacer les Journaux",
        btnPrintLedger: "Imprimer le Rapport",

        archTitle: "Spécification de l'Architecture Logicielle à 3 Couches",
        archSubtitle: "Cartographie de l'architecture d'entreprise MGIS130 : Interface Utilisateur, Traitement Métier et Accès aux Données.",
        archLayer1: "Couche 1 : Interface Utilisateur (UI)",
        archLayer1Desc: "Tailwind CSS, Canvas Adaptatif, Thèmes Dynamiques, Synthèse Vocale Web TTS, Localisation i18n.",
        archLayer2: "Couche 2 : Logique Métier & Traitement",
        archLayer2Desc: "Moteur d'Équilibre (Balance Spirituelle vs Empirique), Générateur de Contemplation, Graphe de Réseau Isnad, Filtre Chronologique.",
        archLayer3: "Couche 3 : Accès aux Données & Persistance",
        archLayer3Desc: "Base de Données Structurée des Inscriptions, Vérification de Hachage d'Audit, Moteur de Persistance Locale.",
        btnClose: "Fermer",

        isnadTitle: "Chaîne de Transmission (Isnad)",
        isnadSubtitle: "Visualisation de l'évaluation biographique (Ilm al-Rijal) et de la lignée de transmission.",
        isnadAuthenticity: "Degré d'Authenticité :",
        isnadGradeSahih: "Sahih (Rigoureusement Vérifié)",

        toastCopiedPrompt: "Sujet de réflexion copié dans le presse-papiers !",
        toastCopiedText: "Texte et citation copiés dans le presse-papiers !",
        toastSaved: "Élément enregistré dans votre Bibliothèque de Manuscrits !",
        toastRemoved: "Élément retiré des Manuscrits Enregistrés.",
        toastLogsCleared: "Registre d'audit de session effacé.",
        toastAudioError: "Erreur de synthèse vocale ou navigateur non compatible."
    },
    de: {
        headerTitle: "Al-Hikmah Journal",
        headerBadge: "Weisheit & Kulturerbe",
        headerSub: "Islamische Inschriften, Prophetische Traditionen & Entdeckungen des Goldenen Zeitalters",
        streakDays: "Tage-Serie",
        btnArch3Layer: "3-Schichten Arch.",
        btnSavedMs: "Gespeichert",
        btnSessionLedger: "Sitzungsbuch",
        
        lblDomainFocus: "Wissensdomäne:",
        optAll: "📖 Alle Wissenstraditionen",
        optQuran: "📖 Edler Koran (Offenbarung)",
        optHadith: "📜 Prophetische Sunnah (Hadith)",
        optWisdom: "🧘 Klassische Gelehrte & Ethik",
        optScience: "🔬 Wissenschaft & Geschichte des Goldenen Zeitalters",
        
        lblCalligraphyScript: "Arabischer Kalligrafie-Stil:",
        btnRetrievePair: "Wissenspaar abrufen",
        lblEraScrub: "Chronologische Zeitleiste:",
        selectedEraLabelAll: "Alle historischen Epochen",
        eraAll: "Alle Epochen",
        era7th: "7. Jh. (Offenbarung)",
        era9th: "9. Jh. (Weisheit aus Bagdad)",
        era10th: "10. Jh. (Goldenes Zeitalter)",
        era11th: "11.-12. Jh. (Andalusien & Persien)",
        
        lblSpiritual: "Spirituelle Inschrift:",
        lblEmpirical: "Empirischer Befund:",
        lblHarmoniousSynth: "Harmonische Synthese",
        
        badgeSacredText: "Heiliger Text / Inschrift",
        badgeHistoricalObs: "Historische & Empirische Beobachtung",
        lblPrimarySource: "Primärquelle & Zugeschriebener Erzähler:",
        lblCitedSource: "Zitierte Historische / Akademische Quelle:",
        btnChainIsnad: "Überlieferungskette (Isnad)",
        badgePeerVerified: "Peer-geprüft",
        btnSaveInscription: "Inschrift speichern",
        btnSaveObservation: "Beobachtung speichern",
        btnSavedItem: "Gespeichert",
        
        titleSynthesis: "Philosophische Reflexionsfrage & Synthese",
        badgeTafakkur: "Kontemplations-Engine (Tafakkur)",
        btnCopyPrompt: "Reflexionsfrage kopieren",
        btnNewSynthesis: "Neue Synthesefrage",
        btnQuizMode: "Wissens-Quiz starten",

        quizTitle: "Quiz zu islamischer Weisheit & Wissenschaft",
        quizSubtitle: "Testen Sie Ihr Wissen über klassische Inschriften, wissenschaftliche Durchbrüche und historische Überlieferungsketten.",
        quizQuestionCount: "Frage",
        quizOf: "von",
        quizScore: "Punktzahl",
        quizNext: "Nächste Frage",
        quizRestart: "Quiz neustarten",
        quizResultsTitle: "Quiz abgeschlossen!",
        quizYourScore: "Ihre Endpunktzahl:",
        quizPerfectScore: "MashaAllah! Herausragende Kenntnis des islamischen Kulturerbes und der Wissenschaft!",
        quizGoodScore: "Gute Arbeit! Starke Kenntnisse historischer Traditionen.",
        quizKeepLearning: "Guter Einsatz! Erkunden Sie weiter das Al-Hikmah Manuskript-Register.",

        savedTitle: "Gespeicherte Manuskripte & Beobachtungen",
        savedSubtitle: "Ihre persönliche Bibliothek mit gemerkten Inschriften, wissenschaftlichen Aufzeichnungen und Zitaten.",
        savedEmpty: "Noch keine Manuskripte gespeichert. Klicken Sie auf Speichern bei einer beliebigen Karte.",
        btnExportCsv: "CSV exportieren",
        btnExportJson: "JSON exportieren",
        btnClearAllSaved: "Alles löschen",
        badgeTypeInscription: "Inschrift",
        badgeTypeObservation: "Beobachtung",
        btnDelete: "Entfernen",

        auditTitle: "Sitzungs-Auditbuch & Telemetrie",
        auditSubtitle: "Echtzeit-Systemprotokollierung, architektonische Telemetrie und Integritäts-Hashes (MGIS130 Konformität).",
        lblTotalRetrieved: "Gesamt abgerufen",
        lblTotalSaved: "Gesamt gespeichert",
        lblActiveTheme: "Aktiver Modus",
        lblSystemStatus: "Systemstatus",
        thTimestamp: "Zeitstempel",
        thAction: "Aktion / Ereignis",
        thDomain: "Domäne",
        thDetail: "Details",
        thProofHash: "Hash",
        auditEmpty: "Noch keine Sitzungsprotokolle erstellt.",
        btnClearLogs: "Protokolle löschen",
        btnPrintLedger: "Bericht drucken",

        archTitle: "Spezifikation der 3-Schichten-Softwarearchitektur",
        archSubtitle: "MGIS130 Unternehmensarchitektur-Zuordnung: Benutzeroberfläche, Geschäftslogik und Datenzugriffsschicht.",
        archLayer1: "Schicht 1: Benutzeroberfläche (UI)",
        archLayer1Desc: "Tailwind CSS, Responsive Canvas, Dynamische Themes, Web Speech TTS Sprachausgabe, i18n Lokalisierung.",
        archLayer2: "Schicht 2: Geschäftslogik & Verarbeitung",
        archLayer2Desc: "Gleichgewichts-Engine (Spirituell vs Empirisch), Kontemplationsgenerator, Isnad-Netzwerkgraph, Chronologiefilter.",
        archLayer3: "Schicht 3: Datenzugriff & Persistenz",
        archLayer3Desc: "Strukturierte Datenbank für Inschriften, Sitzungsprotokoll-Hash-Verifizierung, Lokale Speicher-Engine.",
        btnClose: "Schließen",

        isnadTitle: "Überlieferungskette (Isnad)",
        isnadSubtitle: "Visualisierung der biografischen Bewertung (Ilm al-Rijal) und der Überlieferungslinie.",
        isnadAuthenticity: "Authentizitätsgrad:",
        isnadGradeSahih: "Sahih (Streng verifiziert)",

        toastCopiedPrompt: "Reflexionsfrage in die Zwischenablage kopiert!",
        toastCopiedText: "Text & Zitat in die Zwischenablage kopiert!",
        toastSaved: "Eintrag in Ihrer Manuskript-Bibliothek gespeichert!",
        toastRemoved: "Eintrag aus den gespeicherten Manuskripten entfernt.",
        toastLogsCleared: "Sitzungs-Auditbuch gelöscht.",
        toastAudioError: "Sprachsynthesefehler oder nicht unterstützte Browserstimme."
    },
    tr: {
        headerTitle: "El-Hikmet Dergisi",
        headerBadge: "Hikmet ve Miras",
        headerSub: "İslam Kitabeleri, Nebevi Gelenekler ve Altın Çağ Keşifleri",
        streakDays: "Günlük Seri",
        btnArch3Layer: "3-Katmanlı Mimari",
        btnSavedMs: "Kaydedilenler",
        btnSessionLedger: "Oturum Defteri",
        
        lblDomainFocus: "Bilgi Alanı Odağı:",
        optAll: "📖 Tüm Bilgi Gelenekleri",
        optQuran: "📖 Yüce Kur'an (Vahiy)",
        optHadith: "📜 Nebevi Sünnet (Hadis)",
        optWisdom: "🧘 Klasik Âlimler ve Ahlak",
        optScience: "🔬 Altın Çağ Bilimi ve Tarihi",
        
        lblCalligraphyScript: "Arapça Hat Sanatı Stili:",
        btnRetrievePair: "Bilgi Çiftini Getir",
        lblEraScrub: "Kronolojik Zaman Çizelgesi:",
        selectedEraLabelAll: "Tüm Tarihi Dönemler",
        eraAll: "Tüm Dönemler",
        era7th: "7. Yüzyıl (Vahiy Dönemi)",
        era9th: "9. Yüzyıl (Bağdat Hikmeti)",
        era10th: "10. Yüzyıl (Altın Çağ)",
        era11th: "11-12. Yüzyıl (Endülüs ve İran)",
        
        lblSpiritual: "Manevi Kitabe:",
        lblEmpirical: "Deneysel Bulgu:",
        lblHarmoniousSynth: "Uyumlu Sentez",
        
        badgeSacredText: "Kutsal Metin / Kitabe",
        badgeHistoricalObs: "Tarihi ve Deneysel Gözlem",
        lblPrimarySource: "Birincil Kaynak ve Atfedilen Ravi:",
        lblCitedSource: "Alıntılanan Tarihi / Akademik Kaynak:",
        btnChainIsnad: "İsnad Zinciri",
        badgePeerVerified: "Akademik Onaylı",
        btnSaveInscription: "Kitabeyi Kaydet",
        btnSaveObservation: "Gözlemi Kaydet",
        btnSavedItem: "Kaydedildi",
        
        titleSynthesis: "Felsefi Tefekkür ve Sentez Sorusu",
        badgeTafakkur: "Tefekkür Motoru",
        btnCopyPrompt: "Tefekkür Sorusunu Kopyala",
        btnNewSynthesis: "Yeni Sentez Sorusu",
        btnQuizMode: "Bilgi Testini Çöz",

        quizTitle: "İslam Hikmeti ve Bilimi Testi",
        quizSubtitle: "Klasik kitabeler, bilimsel keşifler ve tarihi rivayet zincirleri bilginizi test edin.",
        quizQuestionCount: "Soru",
        quizOf: "/",
        quizScore: "Puan",
        quizNext: "Sonraki Soru",
        quizRestart: "Testi Yeniden Başlat",
        quizResultsTitle: "Test Tamamlandı!",
        quizYourScore: "Toplam Puanınız:",
        quizPerfectScore: "Maşallah! İslam mirası ve bilimi konusunda mükemmel hakimiyet!",
        quizGoodScore: "Harika iş! Tarihi gelenekler hakkında güçlü bilgi.",
        quizKeepLearning: "Güzel çaba! El-Hikmet el yazması kayıtlarını keşfetmeye devam edin.",

        savedTitle: "Kaydedilen El Yazmaları ve Gözlemler",
        savedSubtitle: "Yer imlerine eklenen kitabeler, bilimsel kayıtlar ve kaynakça kütüphaneniz.",
        savedEmpty: "Henüz kaydedilmiş el yazması yok. Kaydetmek için kartlardaki ikona tıklayın.",
        btnExportCsv: "CSV Dışa Aktar",
        btnExportJson: "JSON Dışa Aktar",
        btnClearAllSaved: "Tümünü Temizle",
        badgeTypeInscription: "Kitabe",
        badgeTypeObservation: "Gözlem",
        btnDelete: "Sil",

        auditTitle: "Oturum Denetim Defteri ve Telemetri",
        auditSubtitle: "Gerçek zamanlı sistem günlüğü, mimari telemetri ve doğrulama kodları (MGIS130 Uyumlu).",
        lblTotalRetrieved: "Toplam Getirilen",
        lblTotalSaved: "Toplam Kaydedilen",
        lblActiveTheme: "Aktif Mod",
        lblSystemStatus: "Sistem Durumu",
        thTimestamp: "Zaman Damgası",
        thAction: "Eylem / Olay",
        thDomain: "Alan",
        thDetail: "Detaylar",
        thProofHash: "Hash Kodu",
        auditEmpty: "Henüz oturum günlüğü oluşturulmadı.",
        btnClearLogs: "Günlükleri Temizle",
        btnPrintLedger: "Raporu Yazdır",

        archTitle: "3-Katmanlı Yazılım Mimarisi Özellikleri",
        archSubtitle: "MGIS130 Kurumsal Mimari Haritası: Kullanıcı Arayüzü, İş Mantığı ve Veri Erişim Katmanları.",
        archLayer1: "Katman 1: Kullanıcı Arayüzü (UI)",
        archLayer1Desc: "Tailwind CSS, Duyarlı Tuval, Dinamik Temalar, Web Ses TTS Sentezi, i18n Yerelleştirme.",
        archLayer2: "Katman 2: İş Mantığı ve İşleme",
        archLayer2Desc: "Denge Motoru (Manevi vs Deneysel Denge), Tefekkür Üreticisi, İsnad Ağı Grafiği, Dönem Filtresi.",
        archLayer3: "Katman 3: Veri Erişimi ve Kalıcılık",
        archLayer3Desc: "Yapılandırılmış Kitabeler Veritabanı, Oturum Denetim Hash Doğrulaması, Yerel Depolama Motoru.",
        btnClose: "Kapat",

        isnadTitle: "İsnad / İletim Zinciri",
        isnadSubtitle: "Biyografik değerlendirme (İlm-i Rical) ve rivayet silsilesi görselleştirmesi.",
        isnadAuthenticity: "Sıhhat Derecesi:",
        isnadGradeSahih: "Sahih (Müttasıl ve Titizlikle Doğrulanmış)",

        toastCopiedPrompt: "Tefekkür sorusu panoya kopyalandı!",
        toastCopiedText: "Metin ve kaynakça panoya kopyalandı!",
        toastSaved: "Öğe El Yazmaları Kütüphanenize kaydedildi!",
        toastRemoved: "Öğe Kaydedilen El Yazmalarından kaldırıldı.",
        toastLogsCleared: "Oturum denetim defteri temizlendi.",
        toastAudioError: "Ses sentezi hatası veya desteklenmeyen tarayıcı sesi."
    },
    ur: {
        headerTitle: "الحکمۃ جریدہ",
        headerBadge: "حکمت و میراث",
        headerSub: "اسلامی کتبے، احادیث نبوی اور عہدِ زریں کی سائنسی دریافتیں",
        streakDays: "مسلسل دن",
        btnArch3Layer: "تھری لیئر آرکیٹیکچر",
        btnSavedMs: "محفوظ شدہ",
        btnSessionLedger: "سیشن لیجر",
        
        lblDomainFocus: "علمی شعبہ:",
        optAll: "📖 تمام علمی روایات",
        optQuran: "📖 قرآنِ مجید (وحی)",
        optHadith: "📜 سنتِ نبوی (حدیث)",
        optWisdom: "🧘 کلاسیکی علماء اور اخلاقیات",
        optScience: "🔬 عہدِ زریں کی سائنس اور تاریخ",
        
        lblCalligraphyScript: "عربی خطاطی کا انداز:",
        btnRetrievePair: "علمی جوڑا حاصل کریں",
        lblEraScrub: "تاریخی خطِ زمانی:",
        selectedEraLabelAll: "تمام تاریخی ادوار",
        eraAll: "تمام ادوار",
        era7th: "7ویں صدی (دورِ وحی)",
        era9th: "9ویں صدی (بغداد کی حکمت)",
        era10th: "10ویں صدی (عہدِ زریں)",
        era11th: "11ویں-12ویں صدی (اندلس و فارس)",
        
        lblSpiritual: "روحانی تحریر:",
        lblEmpirical: "تجرباتی دریافت:",
        lblHarmoniousSynth: "ہم آہنگ امتزاج",
        
        badgeSacredText: "مقدس متن / کتبہ",
        badgeHistoricalObs: "تاریخی و تجرباتی مشاہدہ",
        lblPrimarySource: "بنیادی ماخذ اور راوی:",
        lblCitedSource: "مستند تاریخی / علمی ماخذ:",
        btnChainIsnad: "سلسلہ اسناد",
        badgePeerVerified: "علمی طور پر تصدیق شدہ",
        btnSaveInscription: "کتبہ محفوظ کریں",
        btnSaveObservation: "مشاہدہ محفوظ کریں",
        btnSavedItem: "محفوظ شدہ",
        
        titleSynthesis: "فلسفیانہ تفکر اور ترکیب کا سوال",
        badgeTafakkur: "انجنِ تفکر",
        btnCopyPrompt: "تفکری سوال کاپی کریں",
        btnNewSynthesis: "نیا تفکری سوال",
        btnQuizMode: "علمی کوئز کھیلیں",

        quizTitle: "اسلامی حکمت و سائنس کوئز",
        quizSubtitle: "کلاسیکی کتبوں، سائنسی دریافتوں اور تاریخی روایتوں کی اپنی معلومات کا امتحان لیں۔",
        quizQuestionCount: "سوال",
        quizOf: "میں سے",
        quizScore: "اسکور",
        quizNext: "اگلا سوال",
        quizRestart: "کوئز دوبارہ شروع کریں",
        quizResultsTitle: "کوئز مکمل ہو گیا!",
        quizYourScore: "آپ کا آخری اسکور:",
        quizPerfectScore: "ماشاء اللہ! اسلامی میراث اور سائنس پر بہترین مہارت!",
        quizGoodScore: "بہت عمدہ! تاریخی روایات کے بارے میں بہترین معلومات۔",
        quizKeepLearning: "اچھی کوشش! الحکمۃ کے مخطوطات کی دریافت جاری رکھیں۔",

        savedTitle: "محفوظ شدہ مخطوطات و مشاہدات",
        savedSubtitle: "آپ کی ذاتی لائبریری جہاں منتخب کتبے، سائنسی ریکارڈز اور حوالہ جات محفوظ ہیں۔",
        savedEmpty: "ابھی تک کوئی مخطوطہ محفوظ نہیں کیا گیا۔ محفوظ کرنے کے لیے کارڈ پر موجود بٹن پر کلک کریں۔",
        btnExportCsv: "CSV ایکسپورٹ کریں",
        btnExportJson: "JSON ایکسپورٹ کریں",
        btnClearAllSaved: "سب صاف کریں",
        badgeTypeInscription: "کتبہ",
        badgeTypeObservation: "مشاہدہ",
        btnDelete: "حذف کریں",

        auditTitle: "سیشن آڈٹ لیجر و ٹیلی میٹری",
        auditSubtitle: "ریئل ٹائم سسٹم لاگنگ اور حفاظتی کوڈز (MGIS130 کی تعمیل)۔",
        lblTotalRetrieved: "کل حاصل کردہ",
        lblTotalSaved: "کل محفوظ شدہ",
        lblActiveTheme: "فعال موڈ",
        lblSystemStatus: "سسٹم کی حالت",
        thTimestamp: "وقت",
        thAction: "کارروائی / واقعہ",
        thDomain: "شعبہ",
        thDetail: "تفصیلات",
        thProofHash: "ہیش کوڈ",
        auditEmpty: "اس سیشن میں ابھی تک کوئی لاگ نہیں بنا۔",
        btnClearLogs: "لاگز صاف کریں",
        btnPrintLedger: "رپورٹ پرنٹ کریں",

        archTitle: "تھری لیئر سافٹ ویئر آرکیٹیکچر کی تفصیلات",
        archSubtitle: "MGIS130 انٹرپرائز آرکیٹیکچر: یوزر انٹرفیس، بزنس پروسیسنگ، اور ڈیٹا ایکسیس لیئرز۔",
        archLayer1: "لیئر 1: یوزر انٹرفیس (UI)",
        archLayer1Desc: "ٹیل ونڈ CSS، ریسپونسو کینوس، ڈائنامک تھیمز، ویب اسپیچ TTS، اور ملٹی لینگویج سپورٹ۔",
        archLayer2: "لیئر 2: بزنس لاجک اور پروسیسنگ",
        archLayer2Desc: "ایکویلیبریم انجن، تفکر جنریٹر، اسناد نیٹ ورک گراف، اور ادوار کا فلٹر۔",
        archLayer3: "لیئر 3: ڈیٹا ایکسیس اور پرسٹنس",
        archLayer3Desc: "سٹرکچرڈ کیپشنز و ہسٹری ڈیٹا بیس، سیشن لیجر آڈٹ ہیش، اور لوکل اسٹوریج انجن۔",
        btnClose: "بند کریں",

        isnadTitle: "سلسلہ اسناد اور راوی کا تجزیہ",
        isnadSubtitle: "علم الرجال اور روایت کے اتصال کی تصویری نمائش۔",
        isnadAuthenticity: "صحت کا درجہ:",
        isnadGradeSahih: "صحیح (پختہ تصدیق شدہ)",

        toastCopiedPrompt: "تفکری سوال کلپ بورڈ پر کاپی ہو گیا!",
        toastCopiedText: "متن اور حوالہ کلپ بورڈ پر کاپی ہو گئے!",
        toastSaved: "آئٹم آپ کی مخطوطات لائبریری میں محفوظ ہو گیا!",
        toastRemoved: "آئٹم محفوظ شدہ مخطوطات سے ہٹا دیا گیا۔",
        toastLogsCleared: "سیشن آڈٹ لیجر صاف کر دیا گیا۔",
        toastAudioError: "آواز کی ریکارڈنگ کا مسئلہ یا براؤزر سپورٹ نہیں کرتا۔"
    }
};

// MULTI-LANGUAGE KNOWLEDGE DATABASE
// NOTE: All Qur'an quotes maintain their sacred Arabic text across all languages, while Hadiths, Scholars, Science, and Prompts translate dynamically.
const knowledgeDatabase = [
    {
        id: "pair-1",
        domain: "quran",
        era: "7",
        inscription: {
            arabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
            // Qur'an quote stays strictly in Arabic across all language settings
            translations: {
                en: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
                ar: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
                es: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
                fr: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
                de: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
                tr: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
                ur: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ"
            },
            source: {
                en: "Surah Al-Mujadila (58:11)",
                ar: "سورة المجادلة (٥٨:١١)",
                es: "Sura Al-Mujadila (58:11)",
                fr: "Sourate Al-Mujadila (58:11)",
                de: "Sure Al-Mujadila (58:11)",
                tr: "Mücadele Suresi (58:11)",
                ur: "سورة المجادلة (58:11)"
            }
        },
        observation: {
            arabic: "الشُّعَاعُ يَخْرُجُ مِنَ الأَجْسَامِ المَضِيئَةِ إِلَى العَيْنِ فَتَبْصُرُهَا",
            translations: {
                en: "Light rays emit from luminous objects to the eye, rather than rays emanating from the eye—establishing the foundations of modern optics and experimental physics.",
                ar: "تخرج الأشعة الضوئية من الأجسام المضيئة إلى العين فتُبصرها، مما أرسى قواعد علم البصريات الحديث والفيزياء التجريبية.",
                es: "Los rayos de luz se emiten desde objetos luminosos hacia el ojo, en lugar de emanar del ojo, estableciendo las bases de la óptica moderna y la física experimental.",
                fr: "Les rayons lumineux sont émis par les objets lumineux vers l'œil, établissant ainsi les bases de l'optique moderne et de la physique expérimentale.",
                de: "Lichtstrahlen werden von leuchtenden Objekten zum Auge ausgesendet, was die Grundlagen der modernen Optik und experimentellen Physik legte.",
                tr: "Işık ışınları gözden çıkmak yerine parlak nesnelerden göze gelir ve böylece modern optik ve deneysel fiziğin temelleri atılır.",
                ur: "روشنائی کی شعاعیں آنکھ سے نکلنے کے بجائے روشن اجسام سے آنکھ کی طرف آتی ہیں، جس نے جدید بصریات اور تجرباتی طبیعیات کی بنیاد رکھی۔"
            },
            source: {
                en: "Ibn al-Haytham (Alhazen), Kitab al-Manazir (Book of Optics, c. 1021 CE)",
                ar: "ابن الهيثم، كتاب المناظر (تاريخ ١٠٢١ م)",
                es: "Ibn al-Haytham (Alhazen), Kitab al-Manazir (Libro de Óptica, c. 1021 d.C.)",
                fr: "Ibn al-Haytham (Alhazen), Kitab al-Manazir (Traité d'optique, c. 1021 ap. J.-C.)",
                de: "Ibn al-Haytham (Alhazen), Kitab al-Manazir (Buch der Optik, ca. 1021 n. Chr.)",
                tr: "İbn el-Haysem, Kitab el-Manazir (Optik Kitabı, m. 1021)",
                ur: "ابن الہیثم، کتاب المناظر (بصریات کی کتاب، 1021ء)"
            }
        },
        prompts: {
            en: "How does the Qur'anic imperative to observe nature inspire Ibn al-Haytham's rigorous experimental method in optics?",
            ar: "كيف ألهم الأمر القرآني بتدبر الطبيعة منهج ابن الهيثم التجريبي الدقيق في علم البصريات؟",
            es: "¿Cómo inspiró el imperativo coránico de observar la naturaleza el riguroso método experimental de Ibn al-Haytham en óptica?",
            fr: "Comment l'impératif coranique d'observer la nature a-t-il inspiré la méthode expérimentale rigoureuse d'Ibn al-Haytham en optique ?",
            de: "Wie inspirierte der koranische Auftrag zur Naturbeobachtung Ibn al-Haythams strenge experimentelle Methode in der Optik?",
            tr: "Kuran'ın doğayı gözlemleme emri, İbn el-Haysem'in optikteki titiz deneysel yöntemine nasıl ilham verdi?",
            ur: "کائنات کا مشاہدہ کرنے کے قرآنی حکم نے ابن الہیثم کے بصریات میں جامع تجرباتی طریقہ کار کو کیسے متحرک کیا؟"
        }
    },
    {
        id: "pair-2",
        domain: "hadith",
        era: "7",
        inscription: {
            arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
            translations: {
                en: "Seeking knowledge is an obligation upon every Muslim.",
                ar: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
                es: "La búsqueda del conocimiento es una obligación para todo musulmán.",
                fr: "La recherche du savoir est une obligation pour tout musulman.",
                de: "Das Streben nach Wissen ist eine Pflicht für jeden Muslim.",
                tr: "İlim öğrenmek her Müslümana farzdır.",
                ur: "علم حاصل کرنا ہر مسلمان پر فرض ہے۔"
            },
            source: {
                en: "Sunan Ibn Majah, Hadith 224",
                ar: "سنن ابن ماجه، حديث ٢٢٤",
                es: "Sunan Ibn Majah, Hadiz 224",
                fr: "Sunan Ibn Majah, Hadith 224",
                de: "Sunan Ibn Majah, Hadith 224",
                tr: "Sünen-i İbn Mâce, Hadis 224",
                ur: "سنن ابن ماجہ، حدیث 224"
            }
        },
        observation: {
            arabic: "جَامِعَةُ القَرَوِيِّينَ بِنَاءٌ أُسِّسَ عَلَى التَّقْوَى لِنَشْرِ العُلُومِ وَالفُنُونِ",
            translations: {
                en: "Fatima al-Fihri founded the University of Al-Qarawiyyin in Fez, Morocco (859 CE), recognized as the oldest continually operating degree-granting university in the world.",
                ar: "أسست فاطمة الفهرية جامعة القرويين في فاس بالمغرب (٨٥٩ م)، والتي تُعد أقدم جامعة تمنح الدرجات العلمية بشكل مستمر في العالم.",
                es: "Fatima al-Fihri fundó la Universidad de Al-Qarawiyyin en Fez, Marruecos (859 d.C.), reconocida como la universidad en funcionamiento continuo más antigua del mundo.",
                fr: "Fatima al-Fihri a fondé l'Université Al-Qarawiyyin à Fès, Maroc (859 ap. J.-C.), reconnue comme la plus ancienne université en activité continue au monde.",
                de: "Fatima al-Fihri gründete 859 n. Chr. die Universität Al-Qarawiyyin in Fès, Marokko, die als älteste kontinuierlich betriebene Universität der Welt gilt.",
                tr: "Fatıma el-Fihri, Fas'ın Fes kentinde El-Karaviyyin Üniversitesi'ni kurdu (m. 859); burası dünyanın halen çalışan en eski üniversitesi kabul edilir.",
                ur: "فاطمہ الفہری نے 859ء میں فاس، مراکش میں جامعہ القرویین کی بنیاد رکھی، جسے دنیا کی سب سے پرانی مسلسل فعال یونیورسٹی تسلیم کیا جاتا ہے۔"
            },
            source: {
                en: "Historical Annals of Maghreb Architecture & Higher Learning",
                ar: "المؤلفات التاريخية للعمارة والتعليم العالي بالمغرب العربي",
                es: "Anales Históricos de la Arquitectura del Magreb y la Educación Superior",
                fr: "Annales historiques de l'architecture du Maghreb et de l'enseignement supérieur",
                de: "Historische Annalen der Maghreb-Architektur und Hochschulbildung",
                tr: "Mağrip Mimarisi ve Yükseköğrenim Tarihi Yıllıkları",
                ur: "شمالی افریقہ کی طرزِ تعمیر اور اعلیٰ تعلیم کی تاریخی دستاویزات"
            }
        },
        prompts: {
            en: "In what ways did the universal mandate to seek knowledge pave the way for institutionalized higher education in the Islamic world?",
            ar: "كيف مهد الأمر العالمي بطلب العلم الطريق لمؤسسات التعليم العالي في العالم الإسلامي؟",
            es: "¿De qué maneras el mandato universal de buscar el conocimiento allanó el camino para la educación superior institucionalizada en el mundo islámico?",
            fr: "De quelles manières le mandat universel de recherche du savoir a-t-il ouvert la voie à un enseignement supérieur institutionnalisé dans le monde islamique ?",
            de: "Inwiefern ebnete der universelle Auftrag zum Wissenserwerb den Weg für die institutionalisierte Hochschulbildung in der islamischen Welt?",
            tr: "Evrensel ilim öğrenme emri, İslam dünyasında kurumsallaşmış yükseköğrenimin önünü nasıl açtı?",
            ur: "علم حاصل کرنے کے عالمی حکم نے اسلامی دنیا میں باقاعدہ اعلیٰ تعلیم کے قیام کا راستہ کیسے ہموار کیا؟"
        }
    },
    {
        id: "pair-3",
        domain: "quran",
        era: "9",
        inscription: {
            arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
            // Qur'an quote stays strictly in Arabic across all language settings
            translations: {
                en: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
                ar: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
                es: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
                fr: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
                de: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
                tr: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ",
                ur: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ"
            },
            source: {
                en: "Surah Ali 'Imran (3:190)",
                ar: "سورة آل عمران (٣:١٩٠)",
                es: "Sura Ali 'Imran (3:190)",
                fr: "Sourate Ali 'Imran (3:190)",
                de: "Sure Ali 'Imran (3:190)",
                tr: "Âl-i İmrân Suresi (3:190)",
                ur: "سورة آل عمران (3:190)"
            }
        },
        observation: {
            arabic: "الْجَبْرُ هُوَ عِلْمُ الْمُقَابَلَةِ وَالتَّسْوِيَةِ بَيْنَ الْمَعَادَلاتِ",
            translations: {
                en: "Al-Khwarizmi formulated algebra as a distinct mathematical discipline in Baghdad (c. 820 CE), combining algorithmic procedures with geometric proofs.",
                ar: "صاغ الخوارزمي علم الجبر كفرع رياضي مستقل في بغداد (نحو ٨٢٠ م)، رابطاً بين الخطوات الخوارزمية والبراهين الهندسية.",
                es: "Al-Khwarizmi formuló el álgebra como una disciplina matemática independiente en Bagdad (c. 820 d.C.), combinando procedimientos algorítmicos con pruebas geométricas.",
                fr: "Al-Khwarizmi a formulé l'algèbre en tant que discipline mathématique distincte à Bagdad (c. 820 ap. J.-C.), combinant algorithmes et démonstrations géométriques.",
                de: "Al-Khwarizmi formulierte die Algebra um 820 n. Chr. in Baghdad als eigenständige mathematische Disziplin mit algorithmischen Verfahren.",
                tr: "Harezmi, Bağdat'ta (m. 820) cebiri müstakil bir matematik dalı olarak sistemleştirdi.",
                ur: "الخوارزمی نے بغداد میں (820ء) الجبرا کو ایک الگ ریاضیاتی علم کے طور پر مرتب کیا۔"
            },
            source: {
                en: "Al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala",
                ar: "الخوارزمي، الكتاب المختصر في حساب الجبر والمقابلة",
                es: "Al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala",
                fr: "Al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala",
                de: "Al-Khwarizmi, Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala",
                tr: "Harezmi, El-Kitâbü'l-Muhtasar fî Hısâbi'l-Cebri ve'l-Mukâbele",
                ur: "الخوارزمی، الکتاب المختصر فی حساب الجبر والمقابلہ"
            }
        },
        prompts: {
            en: "How did Al-Khwarizmi's work bridge practical problem-solving (inheritance, land survey) with abstract mathematical reasoning?",
            ar: "كيف ربطت أعمال الخوارزمي بين الحلول العملية (المواريث، مساحة الأراضي) والتفكير الرياضي المجرد؟",
            es: "¿Cómo vinculó el trabajo de Al-Khwarizmi la resolución práctica de problemas con el razonamiento matemático abstracto?",
            fr: "Comment les travaux d'Al-Khwarizmi ont-ils relié la résolution pratique de problèmes au raisonnement mathématique abstrait ?",
            de: "Wie verband Al-Khwarizmis Werk praktische Problemlösung mit abstrakter mathematischer Logik?",
            tr: "Harezmi'nin çalışmaları pratik problem çözümü ile soyut matematiksel akıl yürütmeyi nasıl birleştirdi?",
            ur: "الخوارزمی کے کام نے عملی مسائل کے حل کو تجریدی ریاضیاتی منطق کے ساتھ کیسے جوڑا؟"
        }
    },
    {
        id: "pair-4",
        domain: "quran",
        era: "10",
        inscription: {
            arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
            // Qur'an quote stays strictly in Arabic across all language settings
            translations: {
                en: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
                ar: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
                es: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
                fr: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
                de: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
                tr: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
                ur: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ"
            },
            source: {
                en: "Surah Al-Anbiya (21:30)",
                ar: "سورة الأنبياء (٢١:٣٠)",
                es: "Sura Al-Anbiya (21:30)",
                fr: "Sourate Al-Anbiya (21:30)",
                de: "Sure Al-Anbiya (21:30)",
                tr: "Enbiyâ Suresi (21:30)",
                ur: "سورة الأنبياء (21:30)"
            }
        },
        observation: {
            arabic: "الْمَاءُ أُصُولُ الْحَيَاةِ وَتَرْكِيبِ الْأَبْدَانِ وَطَهَارَةُ الأَرْوَاحِ",
            translations: {
                en: "Ibn Sina (Avicenna) documented public health, water sanitation, and contagious pathogen isolation principles in 'The Canon of Medicine'.",
                ar: "وثق ابن سينا مبادئ الصحة العامة، وتنقيتها، وعزل الأمراض المعدية في كتابه 'القانون في الطب'.",
                es: "Ibn Sina (Avicena) documentó la salud pública, el saneamiento del agua y el aislamiento de patógenos contagiosos en 'El Canon de Medicina'.",
                fr: "Ibn Sina (Avicenne) a documenté la santé publique, l'assainissement de l'eau et le confinement des agents pathogènes dans 'Le Canon de la médecine'.",
                de: "Ibn Sina (Avicenna) dokumentierte Prinzipien der öffentlichen Gesundheit und Seuchenbekämpfung im 'Kanon der Medizin'.",
                tr: "İbn-i Sînâ, 'El-Kânûn fi't-Tıbb' adlı eserinde toplum sağlığı, su hijyeni ve bulaşıcı hastalık karantinası ilkelerini kaydetti.",
                ur: "ابن سینا نے 'القانون فی الطب' میں عوامی صحت، پانی کی صفائی اور متعدی بیماریوں کے قرنطینہ کے اصول مرتب کیے۔"
            },
            source: {
                en: "Ibn Sina (Avicenna), Al-Qanun fi al-Tibb (The Canon of Medicine, c. 1025 CE)",
                ar: "ابن سينا، القانون في الطب (تاريخ ١٠٢٥ م)",
                es: "Ibn Sina (Avicena), Al-Qanun fi al-Tibb (El Canon de Medicina, c. 1025 d.C.)",
                fr: "Ibn Sina (Avicenne), Al-Qanun fi al-Tibb (Le Canon de la médecine, c. 1025 ap. J.-C.)",
                de: "Ibn Sina (Avicenna), Al-Qanun fi al-Tibb (Der Kanon der Medizin, ca. 1025 n. Chr.)",
                tr: "İbn-i Sînâ, El-Kânûn fi't-Tıbb (Tıp Kanunu, m. 1025)",
                ur: "ابن سینا، القانون فی الطب (1025ء)"
            }
        },
        prompts: {
            en: "How did the sacred view of water as life's baseline inform classical Islamic advancements in hygiene, hydrology, and medical science?",
            ar: "كيف أثرت النظرة المقدسة للماء كأصل للحياة في تطور علوم النظافة، والهيدرولوجيا، والطب في الحضارة الإسلامية؟",
            es: "¿Cómo influyó la visión sagrada del agua como base de la vida en los avances islámicos clásicos en higiene, hidrología y medicina?",
            fr: "Comment la vision sacrée de l'eau en tant que fondement de la vie a-t-elle guidé les progrès islamiques en hygiène, hydrologie et médecine ?",
            de: "Wie beeinflusste das heilige Verständnis von Wasser als Lebensgrundlage klassische islamische Fortschritte in Hygiene und Medizin?",
            tr: "Suyun yaşamın kaynağı olarak kutsal kabul edilmesi, İslam tıbbı ve hijyenindeki gelişmelere nasıl yön verdi?",
            ur: "پانی کو زندگی کی بنیادی ضرورت ماننے کے تصور نے اسلامی ادوار میں حفظانِ صحت اور طب کے علوم کو کیسے فروغ دیا؟"
        }
    },
    {
        id: "pair-5",
        domain: "wisdom",
        era: "11",
        inscription: {
            arabic: "العِلْمُ بِلا عَمَلٍ جُنُونٌ ، وَالعَمَلُ بِلا عِلْمٍ لا يَكُونُ",
            translations: {
                en: "Knowledge without action is madness, and action without knowledge is non-existent.",
                ar: "العِلْمُ بِلا عَمَلٍ جُنُونٌ ، وَالعَمَلُ بِلا عِلْمٍ لا يَكُونُ",
                es: "El conocimiento sin acción es locura, y la acción sin conocimiento no existe.",
                fr: "La connaissance sans action est folie, et l'action sans connaissance n'existe pas.",
                de: "Wissen ohne Handeln ist Wahnsinn, und Handeln ohne Wissen existiert nicht.",
                tr: "Amelsiz ilim deliliktir, ilimsiz amel ise yok hükmündedir.",
                ur: "عمل کے بغیر علم دیوانگی ہے، اور علم کے بغیر عمل کا کوئی وجود نہیں۔"
            },
            source: {
                en: "Imam Al-Ghazali, Ayyuha al-Walad (Letter to a Disciple)",
                ar: "الإمام الغزالي، أيها الولد",
                es: "Imam Al-Ghazali, Ayyuha al-Walad (Carta a un discípulo)",
                fr: "Imam Al-Ghazali, Ayyuha al-Walad (Lettre au disciple)",
                de: "Imam Al-Ghazali, Ayyuha al-Walad (Brief an einen Schüler)",
                tr: "İmam Gazâlî, Ey Oğul (Eyyühe'l-Veled)",
                ur: "امام الغزالی، ایہا الولد (نصیحت نامہ)"
            }
        },
        observation: {
            arabic: "اخْتِرَاعُ الأَدَوَاتِ الْجِرَاحِيَّةِ لِتَصْحِيحِ أَعْطَالِ الْجَسَدِ وَإِنْقَاذِ الأَرْوَاحِ",
            translations: {
                en: "Al-Zahrawi (Albucasis) invented over 200 surgical instruments in Cordoba, Andalucia, defining European surgical technique for five centuries.",
                ar: "اخترع الزهراوي أكثر من ٢٠٠ أداة جراحية في قرطبة بالأندلس، والتي شكلت أساس الجراحة الأوروبية لخمسة قرون.",
                es: "Al-Zahrawi (Albucasis) inventó más de 200 instrumentos quirúrgicos en Córdoba, Andalucía, definiendo la cirugía europea durante cinco siglos.",
                fr: "Al-Zahrawi (Albucasis) a inventé plus de 200 instruments chirurgicaux à Cordoue, définissant la chirurgie européenne pendant cinq siècles.",
                de: "Al-Zahrawi (Albucasis) erfand in Córdoba über 200 chirurgische Instrumente, die die europäische Chirurgie fünf Jahrhunderte prägten.",
                tr: "Zehravî, Kurtuba'da 200'den fazla cerrahi alet icat etti ve Avrupa cerrahisini beş yüzyıl boyunca şekillendirdi.",
                ur: "الزہراوی نے قرطبہ (اندلس) میں 200 سے زائد جراحی کے آلات ایجاد کیے جنھوں نے پانچ صدیوں تک یورپی جراحی کی رہنمائی کی۔"
            },
            source: {
                en: "Al-Zahrawi, Kitab al-Tasrif (c. 1000 CE)",
                ar: "الزهراوي، كتاب التصريف لمن عجز عن التأليف (تاريخ ١٠٠٠ م)",
                es: "Al-Zahrawi, Kitab al-Tasrif (c. 1000 d.C.)",
                fr: "Al-Zahrawi, Kitab al-Tasrif (c. 1000 ap. J.-C.)",
                de: "Al-Zahrawi, Kitab al-Tasrif (ca. 1000 n. Chr.)",
                tr: "Zehravî, Kitâbü't-Tasrîf (m. 1000)",
                ur: "الزہراوی، کتاب التصریف (1000ء)"
            }
        },
        prompts: {
            en: "How does Al-Ghazali's philosophical mandate for actionable knowledge parallel Al-Zahrawi's practical innovations in surgery?",
            ar: "كيف يتوازى مبدأ الغزالي الفلسفي في ربط العلم بالعمل مع ابتكارات الزهراوي التطبيقية في الجراحة؟",
            es: "¿Cómo se equipara el mandato filosófico de Al-Ghazali sobre el conocimiento práctico con las innovaciones quirúrgicas de Al-Zahrawi?",
            fr: "En quoi l'exigence philosophique d'Al-Ghazali d'un savoir agissant rejoint-elle les innovations pratiques d'Al-Zahrawi en chirurgie ?",
            de: "Wie spiegelt sich Al-Ghazalis Grundsatz des angewandten Wissens in Al-Zahrawis praktischen Chirurgie-Innovationen wider?",
            tr: "Gazâlî'nin faydalı ilim ilkesi ile Zehravî'nin cerrahideki pratik icatları nasıl bir paralellik gösterir?",
            ur: "علمِ نافع اور عمل کے متعلق الغزالی کا فلسفہ الزہراوی کی جراحی ایجادات سے کیسے مطابقت رکھتا ہے؟"
        }
    }
];

// QUIZ DATA
const quizQuestions = [
    {
        question: "Where was Fatima al-Fihri's University of Al-Qarawiyyin founded in 859 CE?",
        options: ["Fez, Morocco", "Baghdad, Iraq", "Cairo, Egypt", "Cordoba, Spain"],
        answer: 0
    },
    {
        question: "Which scholar wrote 'The Canon of Medicine' (Al-Qanun fi al-Tibb)?",
        options: ["Ibn Sina (Avicenna)", "Al-Razi (Rhazes)", "Ibn Al-Haytham", "Al-Khwarizmi"],
        answer: 0
    },
    {
        question: "What branch of mathematics was pioneered by Muhammad ibn Musa al-Khwarizmi?",
        options: ["Algebra (Al-Jabr)", "Calculus", "Trigonometry", "Topology"],
        answer: 0
    }
];

// STATE VARIABLES
let currentLang = 'en';
let currentEra = 'all';
let currentPair = knowledgeDatabase[0];
let favorites = JSON.parse(localStorage.getItem('alhikmah_favorites') || '[]');
let historyLogs = JSON.parse(localStorage.getItem('alhikmah_logs') || '[]');
let quizCurrentIndex = 0;
let quizScore = 0;

// HELPER: GET LOCALIZED VALUE FOR FIELD
function getLocalized(fieldObj) {
    if (!fieldObj) return "";
    if (typeof fieldObj === 'string') return fieldObj;
    return fieldObj[currentLang] || fieldObj['en'] || "";
}

// RENDER ACTIVE PAIR TO CARDS
function renderCurrentPair() {
    if (!currentPair) return;

    const inscAr = document.getElementById('inscriptionArabic');
    const inscTr = document.getElementById('inscriptionTranslation');
    const inscSrc = document.getElementById('inscriptionSource');
    
    const obsAr = document.getElementById('observationArabic');
    const obsTr = document.getElementById('observationTranslation');
    const obsSrc = document.getElementById('observationSource');
    
    const synthPrompt = document.getElementById('synthesisPromptText');

    if (inscAr) inscAr.textContent = currentPair.inscription.arabic;
    if (inscTr) inscTr.textContent = getLocalized(currentPair.inscription.translations);
    if (inscSrc) inscSrc.textContent = getLocalized(currentPair.inscription.source);

    if (obsAr) obsAr.textContent = currentPair.observation.arabic;
    if (obsTr) obsTr.textContent = getLocalized(currentPair.observation.translations);
    if (obsSrc) obsSrc.textContent = getLocalized(currentPair.observation.source);

    if (synthPrompt) synthPrompt.textContent = getLocalized(currentPair.prompts);

    updateEquilibriumBar();
    updateSaveButtonsState();
}

// LANGUAGE SWITCHER
function updateLanguageUI() {
    const dict = translations[currentLang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    if (currentLang === 'ar' || currentLang === 'ur') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }

    const eraLabel = document.getElementById('selectedEraLabel');
    if (eraLabel) {
        if (currentEra === 'all') {
            eraLabel.textContent = dict.selectedEraLabelAll;
        } else {
            const eraKey = `era${currentEra === '7' ? '7th' : currentEra === '9' ? '9th' : currentEra === '10' ? '10th' : '11th'}`;
            eraLabel.textContent = dict[eraKey] || `${currentEra}th Century Era`;
        }
    }

    renderCurrentPair();
    renderFavoritesList();
    renderAuditHistory();
    updateSaveButtonsState();
}

function filterEra(era, btn) {
    currentEra = era;
    document.querySelectorAll('.era-btn').forEach(b => {
        b.classList.remove('bg-emerald-50', 'text-emerald-800', 'border-emerald-300', 'font-semibold');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
    });
    if (btn) {
        btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
        btn.classList.add('bg-emerald-50', 'text-emerald-800', 'border-emerald-300', 'font-semibold');
    }

    const dict = translations[currentLang] || translations.en;
    const eraLabel = document.getElementById('selectedEraLabel');
    if (eraLabel) {
        if (era === 'all') {
            eraLabel.textContent = dict.selectedEraLabelAll;
        } else {
            const eraKey = `era${era === '7' ? '7th' : era === '9' ? '9th' : era === '10' ? '10th' : '11th'}`;
            eraLabel.textContent = dict[eraKey] || `${era}th Century Era`;
        }
    }

    retrieveKnowledgePair();
}

// KNOWLEDGE RETRIEVAL ENGINE
function retrieveKnowledgePair() {
    const domainSelectEl = document.getElementById('domainSelect');
    const selectedDomain = domainSelectEl ? domainSelectEl.value : 'all';
    
    let filtered = knowledgeDatabase.filter(item => {
        const matchDomain = (selectedDomain === 'all' || item.domain === selectedDomain);
        const matchEra = (currentEra === 'all' || item.era === currentEra);
        return matchDomain && matchEra;
    });

    if (filtered.length === 0) {
        filtered = knowledgeDatabase.filter(item => selectedDomain === 'all' || item.domain === selectedDomain);
        if (filtered.length === 0) filtered = knowledgeDatabase;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    currentPair = filtered[randomIndex];

    renderCurrentPair();
    logAuditEvent("PAIR_RETRIEVED", `Retrieved pair ID: ${currentPair.id} (${currentPair.domain})`);
}

// CALLIGRAPHY STYLE ENGINE
function updateCalligraphyStyle() {
    const scriptSelectEl = document.getElementById('scriptSelect');
    if (!scriptSelectEl) return;
    const selectedStyle = scriptSelectEl.value;
    const inscriptionEl = document.getElementById('inscriptionArabic');
    const observationEl = document.getElementById('observationArabic');
    
    if (inscriptionEl) inscriptionEl.style.fontFamily = selectedStyle;
    if (observationEl) observationEl.style.fontFamily = selectedStyle;
    
    logAuditEvent("STYLE_CHANGE", `Calligraphy font updated to ${selectedStyle}`);
}

// EQUILIBRIUM BAR CALCULATION
function updateEquilibriumBar() {
    const abstractPct = 50 + (Math.floor(Math.random() * 11) - 5);
    const concretePct = 100 - abstractPct;

    const absText = document.getElementById('abstractPctText');
    const concText = document.getElementById('concretePctText');
    const absBar = document.getElementById('abstractBar');
    const concBar = document.getElementById('concreteBar');

    if (absText) absText.textContent = abstractPct + '%';
    if (concText) concText.textContent = concretePct + '%';
    if (absBar) absBar.style.width = abstractPct + '%';
    if (concBar) concBar.style.width = concretePct + '%';
}

// TEXT TO SPEECH (TTS)
function speakText(type) {
    const text = type === 'inscription' ? currentPair.inscription.arabic : currentPair.observation.arabic;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
        logAuditEvent("TTS_PLAY", `Playing audio for ${type}`);
    } else {
        const dict = translations[currentLang] || translations.en;
        showToast(dict.toastAudioError);
    }
}

// SYNTHESIS PROMPT GENERATOR & COPY
function generateNewSynthesisPrompt() {
    retrieveKnowledgePair();
    showToast("New synthesis question generated!");
}

function copySynthesisPrompt() {
    const promptTextEl = document.getElementById('synthesisPromptText');
    if (!promptTextEl) return;
    navigator.clipboard.writeText(promptTextEl.textContent).then(() => {
        const dict = translations[currentLang] || translations.en;
        showToast(dict.toastCopiedPrompt);
    });
}

// FAVORITES / SAVED MANUSCRIPTS MANAGEMENT
function saveCurrentItem(type) {
    const dict = translations[currentLang] || translations.en;
    let itemToSave;

    if (type === 'quote' || type === 'inscription') {
        itemToSave = {
            id: currentPair.id + '-insc',
            type: dict.badgeTypeInscription || 'Inscription',
            text: currentPair.inscription.arabic + " — " + getLocalized(currentPair.inscription.translations),
            source: getLocalized(currentPair.inscription.source),
            dateSaved: new Date().toLocaleDateString()
        };
    } else {
        itemToSave = {
            id: currentPair.id + '-obs',
            type: dict.badgeTypeObservation || 'Observation',
            text: currentPair.observation.arabic + " — " + getLocalized(currentPair.observation.translations),
            source: getLocalized(currentPair.observation.source),
            dateSaved: new Date().toLocaleDateString()
        };
    }

    const existingIndex = favorites.findIndex(f => f.id === itemToSave.id);
    if (existingIndex >= 0) {
        favorites.splice(existingIndex, 1);
        showToast(dict.toastRemoved);
        logAuditEvent("ITEM_REMOVED", `Removed item: ${itemToSave.id}`);
    } else {
        favorites.push(itemToSave);
        showToast(dict.toastSaved);
        logAuditEvent("ITEM_SAVED", `Saved item: ${itemToSave.id}`);
    }

    localStorage.setItem('alhikmah_favorites', JSON.stringify(favorites));
    renderFavoritesList();
    updateSaveButtonsState();
}

function renderFavoritesList() {
    const favList = document.getElementById('favoritesList');
    const badge = document.getElementById('favCountBadge');
    if (badge) badge.textContent = favorites.length;

    if (!favList) return;
    const dict = translations[currentLang] || translations.en;

    if (favorites.length === 0) {
        favList.innerHTML = `<div class="p-8 text-center text-slate-400 text-xs italic">${dict.savedEmpty}</div>`;
        return;
    }

    favList.innerHTML = favorites.map((fav, index) => `
        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2 hover:border-emerald-300 transition-all">
            <div class="flex items-center justify-between text-xs">
                <span class="px-2 py-0.5 rounded-md font-semibold text-[10px] ${fav.type.includes('Inscription') || fav.type.includes('نقش') ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                    ${fav.type}
                </span>
                <span class="text-slate-400 text-[10px]">${fav.dateSaved}</span>
            </div>
            <p class="text-xs text-slate-800 font-medium leading-relaxed">${fav.text}</p>
            <div class="flex justify-between items-center pt-1 text-[11px] text-slate-500 border-t border-slate-200/60">
                <span class="italic font-serif">${fav.source}</span>
                <button onclick="removeFavorite(${index})" class="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1">
                    <i class="fa-solid fa-trash-can text-[10px]"></i> ${dict.btnDelete || 'Remove'}
                </button>
            </div>
        </div>
    `).join('');
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    localStorage.setItem('alhikmah_favorites', JSON.stringify(favorites));
    const dict = translations[currentLang] || translations.en;
    showToast(dict.toastRemoved);
    renderFavoritesList();
    updateSaveButtonsState();
    logAuditEvent("ITEM_REMOVED", `Removed favorite index ${index}`);
}

function clearAllFavorites() {
    favorites = [];
    localStorage.setItem('alhikmah_favorites', JSON.stringify(favorites));
    const dict = translations[currentLang] || translations.en;
    renderFavoritesList();
    updateSaveButtonsState();
    showToast(dict.toastRemoved);
    logAuditEvent("ALL_FAVORITES_CLEARED", "Cleared all saved manuscripts");
}

function updateSaveButtonsState() {
    const inscSaved = favorites.some(f => f.id === currentPair.id + '-insc');
    const obsSaved = favorites.some(f => f.id === currentPair.id + '-obs');

    const saveInscBtn = document.getElementById('saveInscriptionBtn');
    const saveObsBtn = document.getElementById('saveObservationBtn');

    const dict = translations[currentLang] || translations.en;

    if (saveInscBtn) {
        if (inscSaved) {
            saveInscBtn.className = "text-xs bg-amber-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveInscBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> <span>${dict.btnSavedItem}</span>`;
        } else {
            saveInscBtn.className = "text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveInscBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>${dict.btnSaveInscription}</span>`;
        }
    }

    if (saveObsBtn) {
        if (obsSaved) {
            saveObsBtn.className = "text-xs bg-emerald-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveObsBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> <span>${dict.btnSavedItem}</span>`;
        } else {
            saveObsBtn.className = "text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5";
            saveObsBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>${dict.btnSaveObservation}</span>`;
        }
    }
}

// QUIZ ENGINE
function openQuizModal() {
    quizCurrentIndex = 0;
    quizScore = 0;
    const qCont = document.getElementById('quizContainer');
    const qRes = document.getElementById('quizResults');
    const qMod = document.getElementById('quizModal');

    if (qCont) qCont.classList.remove('hidden');
    if (qRes) qRes.classList.add('hidden');
    renderQuizQuestion();
    if (qMod) qMod.classList.remove('hidden');
    logAuditEvent("QUIZ_OPEN", "Started interactive quiz.");
}

function closeQuizModal() {
    const qMod = document.getElementById('quizModal');
    if (qMod) qMod.classList.add('hidden');
}

function renderQuizQuestion() {
    if (quizCurrentIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }

    const q = quizQuestions[quizCurrentIndex];
    const qNum = document.getElementById('quizQuestionNum');
    const qTot = document.getElementById('quizTotalNum');
    const qCurScore = document.getElementById('quizCurrentScore');
    const qText = document.getElementById('quizQuestionText');

    if (qNum) qNum.textContent = quizCurrentIndex + 1;
    if (qTot) qTot.textContent = quizQuestions.length;
    if (qCurScore) qCurScore.textContent = quizScore;
    if (qText) qText.textContent = q.question;

    const optsContainer = document.getElementById('quizOptions');
    if (optsContainer) {
        optsContainer.innerHTML = '';
        q.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = "w-full text-left p-3 rounded-xl border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all text-xs font-medium text-slate-800 flex items-center justify-between";
            btn.innerHTML = `<span>${optText}</span><i class="fa-regular fa-circle text-slate-400"></i>`;
            btn.onclick = () => selectQuizOption(idx);
            optsContainer.appendChild(btn);
        });
    }

    const nextBtn = document.getElementById('nextQuizBtn');
    if (nextBtn) nextBtn.classList.add('hidden');
}

function selectQuizOption(selectedIdx) {
    const q = quizQuestions[quizCurrentIndex];
    const isCorrect = selectedIdx === q.answer;
    if (isCorrect) quizScore++;

    const optsContainer = document.getElementById('quizOptions');
    if (optsContainer) {
        const buttons = optsContainer.querySelectorAll('button');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.answer) {
                btn.className = "w-full text-left p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold flex items-center justify-between";
                btn.querySelector('i').className = "fa-solid fa-circle-check text-emerald-600";
            } else if (idx === selectedIdx) {
                btn.className = "w-full text-left p-3 rounded-xl border-2 border-rose-400 bg-rose-50 text-rose-900 font-bold flex items-center justify-between";
                btn.querySelector('i').className = "fa-solid fa-circle-xmark text-rose-500";
            }
        });
    }

    const qCurScore = document.getElementById('quizCurrentScore');
    if (qCurScore) qCurScore.textContent = quizScore;

    const nextBtn = document.getElementById('nextQuizBtn');
    if (nextBtn) nextBtn.classList.remove('hidden');
}

function nextQuizQuestion() {
    quizCurrentIndex++;
    renderQuizQuestion();
}

function showQuizResults() {
    const qCont = document.getElementById('quizContainer');
    const qRes = document.getElementById('quizResults');
    const qFinalScore = document.getElementById('quizFinalScore');
    const qScoreMsg = document.getElementById('quizScoreMsg');

    if (qCont) qCont.classList.add('hidden');
    if (qRes) qRes.classList.remove('hidden');
    if (qFinalScore) qFinalScore.textContent = `${quizScore}/${quizQuestions.length}`;

    const dict = translations[currentLang] || translations.en;
    let msg = dict.quizKeepLearning;
    if (quizScore === quizQuestions.length) msg = dict.quizPerfectScore;
    else if (quizScore >= 2) msg = dict.quizGoodScore;

    if (qScoreMsg) qScoreMsg.textContent = msg;
}

function restartQuiz() {
    openQuizModal();
}

// MODAL MANAGEMENT
function openFavoritesModal() { document.getElementById('favoritesModal')?.classList.remove('hidden'); }
function closeFavoritesModal() { document.getElementById('favoritesModal')?.classList.add('hidden'); }

function openHistoryModal() { document.getElementById('historyModal')?.classList.remove('hidden'); }
function closeHistoryModal() { document.getElementById('historyModal')?.classList.add('hidden'); }

function openArchModal() { document.getElementById('archModal')?.classList.remove('hidden'); }
function closeArchModal() { document.getElementById('archModal')?.classList.add('hidden'); }

function openIsnadModal() { document.getElementById('isnadModal')?.classList.remove('hidden'); }
function closeIsnadModal() { document.getElementById('isnadModal')?.classList.add('hidden'); }

// EXPORT & LEDGER AUDIT LOGGING
function logAuditEvent(action, detail) {
    const domainEl = document.getElementById('domainSelect');
    const logEntry = {
        time: new Date().toLocaleTimeString(),
        action: action,
        domain: domainEl ? domainEl.value : 'all',
        detail: detail,
        hash: '0x' + Math.random().toString(16).substr(2, 8)
    };
    historyLogs.push(logEntry);
    localStorage.setItem('alhikmah_logs', JSON.stringify(historyLogs));
    renderAuditHistory();
}

function renderAuditHistory() {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;
    const dict = translations[currentLang] || translations.en;

    const totalRetrieved = document.getElementById('auditTotalRetrieved');
    const totalSaved = document.getElementById('auditTotalSaved');
    if (totalRetrieved) totalRetrieved.textContent = historyLogs.length;
    if (totalSaved) totalSaved.textContent = favorites.length;

    if (historyLogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 text-xs">${dict.auditEmpty}</td></tr>`;
        return;
    }

    tbody.innerHTML = historyLogs.slice().reverse().map(log => `
        <tr class="hover:bg-slate-50 font-mono text-[11px]">
            <td class="p-2.5 text-slate-500">${log.time}</td>
            <td class="p-2.5 font-bold text-slate-800">${log.action}</td>
            <td class="p-2.5 text-slate-600 capitalize">${log.domain}</td>
            <td class="p-2.5 text-slate-700 max-w-xs truncate">${log.detail}</td>
            <td class="p-2.5 text-amber-700 font-bold">${log.hash}</td>
        </tr>
    `).join('');
}

function clearAuditHistory() {
    historyLogs = [];
    localStorage.setItem('alhikmah_logs', JSON.stringify(historyLogs));
    renderAuditHistory();
    const dict = translations[currentLang] || translations.en;
    showToast(dict.toastLogsCleared);
}

function printAuditLedger() {
    window.print();
}

// UNIVERSAL MOBILE & DESKTOP EXPORT HELPER (Fixes Safari iOS & Mobile Chrome)
async function downloadOrShareFile(filename, content, mimeType) {
    if (!content || favorites.length === 0) return;

    const blob = new Blob([content], { type: mimeType });
    const file = new File([blob], filename, { type: mimeType });

    // 1. MOBILE NATIVE SHARE SHEET (iOS Safari & Android Chrome)
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share({
                files: [file],
                title: filename,
                text: 'Al-Hikmah Journal Exported Manuscripts'
            });
            showToast("Export opened in Share menu!");
            return;
        } catch (err) {
            if (err.name === 'AbortError') return;
            console.warn("Mobile share failed, falling back to download link:", err);
        }
    }

    // 2. DESKTOP / SAFARI FALLBACK DOWNLOAD (PC, Mac, Linux)
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 1000);
}

// EXPORT FAVORITES AS CSV
function exportFavoritesCSV() {
    if (favorites.length === 0) return;

    // UTF-8 BOM (\uFEFF) ensures Arabic text renders properly in Excel & Mobile viewers
    const csvContent = "\uFEFFType,Text,Source,DateSaved\n" + 
        favorites.map(f => `"${f.type}","${f.text.replace(/"/g, '""')}","${f.source}","${f.dateSaved}"`).join("\n");

    downloadOrShareFile("alhikmah_saved_manuscripts.csv", csvContent, 'text/csv;charset=utf-8;');
}

// EXPORT FAVORITES AS JSON
function exportFavoritesJSON() {
    if (favorites.length === 0) return;

    const jsonStr = JSON.stringify(favorites, null, 2);
    downloadOrShareFile("alhikmah_saved_manuscripts.json", jsonStr, 'application/json;charset=utf-8;');
}

// UTILITY TOAST NOTIFICATION
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-lg border border-slate-700 animate-toast flex items-center gap-2 pointer-events-auto';
    toast.innerHTML = `<i class="fa-solid fa-circle-info text-emerald-400"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// EXPLICIT GLOBAL BINDINGS FOR INLINE EVENT HANDLERS
window.openArchModal = openArchModal;
window.closeArchModal = closeArchModal;
window.openFavoritesModal = openFavoritesModal;
window.closeFavoritesModal = closeFavoritesModal;
window.openHistoryModal = openHistoryModal;
window.closeHistoryModal = closeHistoryModal;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
window.openIsnadModal = openIsnadModal;
window.closeIsnadModal = closeIsnadModal;
window.retrieveKnowledgePair = retrieveKnowledgePair;
window.updateCalligraphyStyle = updateCalligraphyStyle;
window.filterEra = filterEra;
window.speakText = speakText;
window.saveCurrentItem = saveCurrentItem;
window.removeFavorite = removeFavorite;
window.clearAllFavorites = clearAllFavorites;
window.exportFavoritesCSV = exportFavoritesCSV;
window.exportFavoritesJSON = exportFavoritesJSON;
window.copySynthesisPrompt = copySynthesisPrompt;
window.generateNewSynthesisPrompt = generateNewSynthesisPrompt;
window.selectQuizOption = selectQuizOption;
window.nextQuizQuestion = nextQuizQuestion;
window.restartQuiz = restartQuiz;
window.clearAuditHistory = clearAuditHistory;
window.printAuditLedger = printAuditLedger;

// INITIALIZE APP UPON DOM READY
document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function(e) {
            currentLang = e.target.value;
            updateLanguageUI();
            logAuditEvent("LANG_CHANGE", `Language changed to ${currentLang.toUpperCase()}`);
        });
    }

    updateLanguageUI();
    retrieveKnowledgePair();
    renderFavoritesList();
    renderAuditHistory();
    updateSaveButtonsState();
    logAuditEvent("SESSION_START", "Application initialized with clean modern UI.");
});

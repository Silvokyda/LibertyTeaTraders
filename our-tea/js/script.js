
var wa_btnSetting = {
    btnColor: "#16BE45",
    ctaText: "WhatsApp Us",
    cornerRadius: 40,
    marginBottom: 90,
    marginLeft: 20,
    marginRight: 20,
    btnPosition: "right",
    whatsAppNumber: "254722371234",
    welcomeMessage: "Welcome to Liberty Tea Traders, how can we help you?",
    zIndex: 999999,
    btnColorScheme: "light",
};
var wa_widgetSetting = {
    title: "Liberty Tea Traders",
    subTitle: "Typically replies in a day",
    headerBackgroundColor: "#1a7c13",
    headerColorScheme: "dark",
    greetingText: "Hi there! \nHow can I help you?",
    ctaText: "Start Chat",
    btnColor: "#116f35",
    cornerRadius: 40,
    welcomeMessage: "Hello",
    btnColorScheme: "light",
    brandImage: "https://i.imgur.com/BRvKe5Z.png",
    darkHeaderColorScheme: { title: "#333333", subTitle: "#4F4F4F" },
};
window.onload = () => {
    _waEmbed(wa_btnSetting, wa_widgetSetting);
};

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',}, 'google_translate_element');}
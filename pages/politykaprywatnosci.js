import Center from "@/components/Center";
import Description from "@/components/Description";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageProps from "@/components/ImageProps";
import TextParts from "@/components/TextParts";
import styled from "styled-components";
import NewsSection from "@/components/sections/NewsSection";
import Footer from "@/components/Footer";
import {mongooseConnect} from "@/lib/mongoose";
import {Category} from "@/models/Category";

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 40px;
  text-align: center;


`;

const MyInput = styled.input`
  height: 50px;
  width: 100%;
  max-width: 500px;
  font-size: 20px;

  border: 1px solid gray;
  padding: 2px 10px;
  margin-top: 15px;
`;
const MyTextArea = styled.textarea`
  height: 150px;
  width: 100%;
  max-width: 500px;
  font-size: 20px;
  border: 1px solid gray;
  padding: 7px 10px;
  margin-top: 10px;
  resize: none;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

`;


const MyLabel = styled.label`
  margin-right: 470px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;
  @media only screen and (max-width: 600px) {
    margin-right: 40px;
  }


`;
const TextAreaLabel = styled.label`
  margin-right: 430px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;
  @media only screen and (max-width: 600px) {
    margin-right: 40px;
  }



`;
const Products = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  background-color: white;
  top: -80px;
`;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

`
const Button = styled.button`
  margin-top: 10px;
  height: 50px;
  width: 100px;
  border: 2px solid transparent;
  background-color: #222;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black

  }
`


export default function contactPage({categories}) {
  return (
    <>
      <Header categories={categories}/>

      <Hero>
        <ImageProps src="https://alchemy-theme-modern.myshopify.com/cdn/shop/files/Cools-Club_blog_02_Cover.jpg"/>
        <TextParts>
          <Title>Polityka prywatności</Title>

        </TextParts>
      </Hero>


      <Products>
        <br/>
        <br/>

        <Title>Polityka prywatności</Title>
        <h4>§1</h4>
        <h3> POSTANOWIENIA OGÓLNE</h3>
        <p>1. Niniejszy dokument określa Politykę Prywatności w sklepie internetowym  Wycinarnia.pl, funkcjonującym pod adresem https://wycinarnia.vercel.app/pl, prowadzonym przez spółkę IMPRESS CREATIVES Sp. z o.o. z siedzibą w Katowicach, ul. Pierwiosnków 11, 40-750 (Katowice), wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy Katowice - Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000874714, REGON 387743385, NIP 9542821471, która w szczególności  obejmuje regulacje dotyczące ochrony danych osobowych oraz bezpieczeństwa innych danych wprowadzonych do Serwisu przez Użytkownika. </p>
        <p>2. Polityka Prywatności stanowi integralny załącznik do Regulaminu sklepu internetowego Wycinarnia.pl. </p>
        <h4>§2</h4>
        <h3> DEFINICJE</h3>
        <p> Terminy użyte w niniejszym dokumencie oznaczają:</p>
        <p>1. Administrator danych osobowych (zwany także Administratorem) - IMPRESS CREATIVES Sp. z o.o. z siedzibą w Katowicach, ul. Pierwiosnków 11, 40-750 (Katowice), wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy Katowice - Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000874714, REGON 387743385, NIP 9542821471.</p>
        <p>2. Serwis - strona internetowa pod adresem https://wycinarnia.vercel.app/pl oraz wszelkie jej podstrony.</p>
        <p>3. Użytkownik - osoba fizyczna, która korzysta z Serwisu i podaje w jego ramach swoje dane osobowe.</p>
        <p>4. Dane osobowe - informacje o osobie fizycznej zidentyfikowanej lub możliwej do zidentyfikowania poprzez jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość, w tym wizerunek, nagranie głosu, dane kontaktowe, dane o lokalizacji, informacje zawarte w korespondencji, informacje gromadzone za pośrednictwem sprzętu rejestrującego lub innej podobnej technologii,</p>
        <p>5. RODO – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE,</p>
        <p>6. Regulamin – Regulamin sklepu internetowego Wycinarnia.pl. </p>
        <h4>§3</h4>
        <h3> OCHRONA DANYCH OSOBOWYCH</h3>
        <p>Administrator jest administratorem danych osobowych w rozumieniu RODO.</p>
        <p>Administrator zbiera i przetwarza dane osobowe zgodnie z właściwymi przepisami prawa, w tym w szczególności z RODO, i zgodnie z zasadami przewidzianymi w tych przepisach. </p>
        <p>Administrator informuje o przetwarzaniu danych w chwili ich zebrania. Administrator przetwarza dane w zakresie, czasie i celach każdorazowo wskazanych w treściach udostępnionych pod formularzami służącymi do zbierania danych osobowych od Użytkownika.</p>
        <p>Administrator przekazuje Dane osobowe wyłącznie zaufanym podwykonawcom Administratora, tj. kurierom, dostawcom odpowiedzialnym za obsługę systemów informatycznych, podmiotom takim jak magazyny, banki i operatorzy płatności, podmioty świadczące usługi księgowe, prawne, agencje marketingowe (w zakresie usług marketingowych), podmiotom świadczącym pozostałe usługi informatyczno-programistyczne. </p>
        <p>Administrator ma prawo przekazania wybranych Danych osobowych Użytkownika właściwym organom i osobom trzecim jeśli taka konieczność wynika z obowiązujących przepisów prawa i gdy podmioty te zgłaszają żądanie ich udzielenia w oparciu o odpowiednią podstawę prawną.</p>
        <p>Administrator zapewnia bezpieczeństwo przetwarzanych danych osobowych oraz ich poufność, a także umożliwia dostęp do informacji o przetwarzaniu danych Użytkownikowi. Gdyby pomimo stosowanych środków bezpieczeństwa doszło do naruszenia ochrony Danych osobowych (np. „wycieku” danych lub ich utraty) i takie naruszenie mogłoby powodować wysokie ryzyko naruszenia praw lub wolności Użytkownika, Administrator poinformuje o takim zdarzeniu Użytkownika w sposób zgodny z przepisami.</p>
        <p>Użytkownik może skontaktować się z administratorem danych. Dane kontaktowe są następujące:</p>
        <p>Adres korespondencyjny:
        ul. Pierwiosnków 11, 40-750 Katowice,</p>
        <p>Adres e-mail:
        kontakt@wycinarnia.pl</p>
        <p>Numer telefonu:
        +48 32 441 28 83</p>
        <h4>§4</h4>
        <h3> BEZPIECZEŃSTWO DANYCH OSOBOWYCH</h3>
        <p>1. Administrator wykorzystuje wszelkie dostępne mu techniczne i organizacyjne możliwości, by zapewnić bezpieczeństwo danym osobowym Użytkownika i ochronić je przed przypadkowym lub celowym zniszczeniem, przypadkową utratą, modyfikacją, nieautoryzowanym ujawnieniem lub dostępem do nich. Dane osobowe Użytkowników są przechowywane i przetwarzane na serwerach o wysokim stopniu zabezpieczeń, z zachowaniem odpowiednich środków bezpieczeństwa, spełniających wymogi polskiego prawa.</p>
        <p>2. Powierzone dane są składowane na najwyższej klasy sprzęcie i serwerach w odpowiednio zabezpieczonych centrach przechowywania informacji, do których dostęp mają tylko upoważnione osoby.</p>
        <p>3. Administrator przeprowadza czynności związane z przetwarzaniem danych osobowych z poszanowaniem wszystkich wymogów prawnych i technicznych nałożonych na niego przez przepisy dotyczące ochrony danych osobowych. Administrator na bieżąco analizuje ryzyka związane z przetwarzaniem przez niego danych osobowych i dba o to, by dostęp do danych miały wyłącznie osoby do tego uprawnione i tylko w zakresie niezbędnym do wykonywania ich obowiązków. </p>
        <p>4. Administrator podejmuje wszelkie niezbędne działania, by także jego podwykonawcy i inne podmioty współpracujące dawały gwarancję stosowania odpowiednich środków bezpieczeństwa w każdym przypadku, gdy przetwarzają Dane osobowe na zlecenie Administratora.</p>
        <p>5. Administrator zobowiązuje się do przechowywania kopii bezpieczeństwa zawierających dane osobowe Użytkownika.</p>
        <h4>§5</h4>
        <h3> UPRAWNIENIA UŻYTKOWNIKA</h3>
        <p>1. W przypadku zmiany danych osobowych, Użytkownik powinien uaktualnić je wysyłając stosowną wiadomość do Administratora.</p>
        <p>2. Użytkownikowi przysługują następujące uprawnienia:<br/>
        prawo do informacji o przetwarzaniu Danych osobowych, <br/>
        prawo uzyskania kopii Danych osobowych, które przetwarza Administrator, <br/>
        prawo do sprostowania Danych osobowych, <br/>
        prawo do usunięcia Danych osobowych (na tej podstawie można żądać usunięcia danych, których przetwarzanie nie jest już niezbędne do realizowania żadnego z celów, dla których zostały zebrane), <br/>
         prawo do ograniczenia przetwarzania Danych osobowych, <br/>
         prawo do przenoszenia Danych osobowych, <br/>
         prawo sprzeciwu wobec przetwarzania Danych osobowych w celach marketingowych (Użytkownik może w każdym momencie sprzeciwić się przetwarzaniu Danych osobowych w celach marketingowych, bez konieczności uzasadnienia takiego sprzeciwu), <br/>
         prawo sprzeciwu wobec innych celów przetwarzania danych (Użytkownik może w każdym czasie sprzeciwić się – z przyczyn związanych z jego szczególną sytuacją – przetwarzaniu Danych osobowych, które odbywa się na podstawie prawnie uzasadnionego interesu Administratora; sprzeciw taki wymaga  uzasadnienia), <br/>
         prawo wycofania zgody, jeśli Dane osobowe przetwarzane są na podstawie wyrażonej zgody (wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem), <br/>
         prawo do skargi do organu nadzorującego przetwarzanie Danych osobowych, właściwego ze względu na miejsce zwykłego pobytu Użytkownika, jego miejsce pracy lub miejsce popełnienia domniemanego naruszenia. W Polsce organem nadzorczym jest Prezes Urzędu Ochrony Danych Osobowych. <br/> </p>    
        <p>3. Administrator może odmówić usunięcia danych osobowych Użytkownika, jeżeli zachowanie danych osobowych jest konieczne ze względu na obowiązek nałożony na Administratora przez przepisy prawa.</p>
        <p>4. Użytkownik  ma prawo do złożenia żądania dotyczącego realizacji przysługujących mu uprawnień wskazanych powyżej drogą listowną lub elektroniczną (e-mail). Dane kontaktowe Administratora wskazane zostały w § 3 ust. 7. </p>
        <p>W przypadku kiedy na podstawie żądania, o którym mowa w ust. 4 Administrator nie będzie w stanie ustalić i zidentyfikować osoby fizycznej, której żądanie dotyczy, zwróci się do wnioskodawcy o dodatkowe informacje. Brak podania dodatkowych informacji będzie skutkować odmową spełnienia żądania wnioskodawcy. </p>
        <p>Administrator udziela odpowiedzi na żądanie w przeciągu miesiąca od jego otrzymania. W razie konieczności przedłużenia tego terminu Administrator informuje wnioskodawcę o jej przyczynach i przewidywanym terminie udzielenia odpowiedzi na żądanie.</p>
        <h4>§6</h4>
        <h3> PODSTAWA, CEL I OKRES PRZECHOWYWANIA DANYCH OSOBOWYCH</h3>
        <p>1. Dane osobowe są przetwarzane w następujących celach i na następujących podstawach: <br/>
        Korzystanie z Serwisu:  </p>
        <p>Dane osobowe wszystkich osób korzystających z Serwisu (w tym adres IP lub inne identyfikatory oraz informacje gromadzone za pośrednictwem plików cookies czy innych podobnych technologii), przetwarzane są przez Administratora w celu</p>
        <p>1. świadczenia usług drogą elektroniczną (podstawa prawna: niezbędność przetwarzania do wykonania umowy  - art. 6 ust. 1 lit. b RODO),</p>
       <p>2. w celach analitycznych i statystycznych (podstawa prawna: zgoda – art. 6 ust. 1 lit. a RODO),</p>
       <p>3. ustalenia i dochodzenia roszczeń lub obrony przed roszczeniami  (podstawa prawna: prawnie uzasadniony interes Administratora - art. 6 ust. 1 lit. f RODO, jakim jest ochrona praw Administratora).</p>
       <p>Rejestracja w Serwisie, formularz zamówienia:</p>


       <p>W celu założenia, obsługi i utrzymania Konta Użytkownika Użytkownik proszony jest o podanie Danych osobowych wskazanych w formularzu rejestracji. W celu złożenia zamówienia w Serwisie Użytkownik proszony jest o podanie Danych osobowych wskazanych w formularzu zamówienia. Podanie danych nie jest obowiązkowe, ale odmowa ich podania skutkuje brakiem możliwości złożenia zamówienia. Wskazane przez Użytkownika Dane osobowe przetwarzane są przez Administratora w celu:</p>
        <p>1. świadczenia usług drogą elektroniczną oraz zawarcie umowy sprzedaży (podstawa prawna: niezbędność przetwarzania do wykonania umowy  - art. 6 ust. 1 lit. b RODO),</p>
        <p>2. w celach analitycznych i statystycznych (podstawa prawna: zgoda – art. 6 ust. 1 lit. a RODO),</p>
        <p>3. ustalenia i dochodzenia roszczeń lub obrony przed roszczeniami  (podstawa prawna: prawnie uzasadniony interes Administratora - art. 6 ust. 1 lit. f RODO, jakim jest ochrona praw Administratora).</p>
        <p>4. Newsletter:</p>
        <p>Użytkownicy, który zgłosili Administratorowi taką wolę, otrzymują wiadomości e-mail z treściami reklamowymi. Dokonanie zapisu na Newsletter wiąże się z podaniem Administratorowi Danych osobowych Użytkownika. Podanie danych nie jest obowiązkowe, ale odmowa ich podania skutkuje brakiem możliwości świadczenia usługi Newsletter’a. Wskazane przez Użytkownika Dane osobowe przetwarzane są przez Administratora w celu:</p>
        <p>1. świadczenia usług drogą elektroniczną (podstawa prawna: niezbędność przetwarzania do wykonania umowy  - art. 6 ust. 1 lit. b RODO - w zakresie danych niezbędnych do wysyłki Newsletter ‘a),</p>
        <p>2. w celach analitycznych i statystycznych (podstawa prawna: zgoda – art. 6 ust. 1 lit. a RODO)</p>
        <p>3. ustalenia i dochodzenia roszczeń lub obrony przed roszczeniami  (podstawa prawna: prawnie uzasadniony interes Administratora - art. 6 ust. 1 lit. f RODO, jakim jest ochrona praw Administratora),  </p>
        <p>4. Marketing</p>
        <p>Administrator przetwarza Dane osobowe Użytkowników w celu realizowania działań marketingowych, które mogą polegać w szczególności na wyświetlaniu Użytkownikowi treści marketingowych odpowiadających jego zainteresowaniom czy przesyłaniu informacji handlowych drogą elektroniczna w celach związanych z marketingiem bezpośrednim towarów i usług. W takim przypadku Dane osobowe Użytkownika przetwarzane są przez Administratora na podstawie zgody Użytkownika  (art. 6 ust. 1 lit. a RODO), która może zostać cofnięta. Realizacja celów marketingowych Administratora może być realizowana poprzez profilowanie, polegające na automatycznemu przetwarzaniu Danych osobowych i ich ocenie w celu analizy zachowania użytkownika i stworzenia prognozy na przyszłość, co pozwana za wyświetlanie Użytkownikowi treści zgodnych z jego indywidualnymi preferencjami i zainteresowaniami Użytkownika. </p>
        <p>Formularz kontaktowy, korespondencja tradycyjna i elektroniczna (e-mail)</p>
        <p>Użytkownik może kierować do Administratora wiadomości, wykorzystując pocztę elektroniczną z wykorzystaniem danych kontaktowych Administratora dostępnych w Serwisie, Regulaminie czy niniejszej Polityce prywatności, a także poprzez formularz kontaktowy dostępny w Serwisie. Dane osobowe zawarte w tej korespondencji Administrator wykorzystuje wyłącznie w celu komunikacji i załatwienia sprawy, której korespondencja dotyczy. Podstawą przetwarzania Danych jest prawnie uzasadniony interes Administratora - art. 6 ust. 1 lit. f RODO – polegający na utrzymaniu korespondencji kierowanej do niego w związku z prowadzoną przez niego działalnością gospodarczą, a w przypadku kontaktu związanego ze świadczonymi usługami czy umową - niezbędność przetwarzania do wykonania umowy  - art. 6 ust. 1 lit. b RODO.</p>
        <p>Kontakt telefoniczny</p>
        <p>Użytkownik może kontaktować się z Administratorem drogą telefoniczną w celu związanym z świadczonymi usługami czy zawartą umową oraz w innych sprawach. W razie podjęcia kontaktu telefonicznego w sprawach niezwiązanych z zawartą umową czy świadczoną usługą Administrator może żądać podania Danych osobowych wyłącznie wtedy, gdy będzie to niezbędne do obsługi zgłoszonej sprawy. Podstawą prawną przetwarzania Danych osobowych jest prawnie uzasadniony interes Administratora  - art. 6 ust. 1 lit. f RODO - polegający na konieczności rozwiązania zgłoszonej  sprawy związanej z prowadzoną przez niego działalnością gospodarczą, a w przypadku kontaktu związanego ze świadczonymi usługami czy umową - niezbędność przetwarzania do wykonania umowy  - art. 6 ust. 1 lit. b RODO.</p>
        <p>Profile w mediach społecznościowych </p>
        <p>Administrator posiada swoje profile w mediach społecznościowych (m.in. Instagram, Facebook). Administrator przetwarza Dane osobowe pozostawione przez osoby odpowiadające profile np. komentarze czy identyfikatory internetowe. Administrator wykorzystuje te dane w celu efektywnego prowadzenia profili, umożliwienia aktywności na tych profilach, a także w celach analitycznych czy statystycznych. Podstawą prawną przetwarzania Danych osobowych jest prawnie uzasadniony interes Administratora  - art. 6 ust. 1 lit. f RODO - polegający na promocji swojej działalności i świadczonych usług, ewentualnie w celu dochodzenia roszczeń czy obrony przed roszczeniami osób trzecich. Powyższe nie dotyczy przetwarzania danych osobowych przez portale społecznościowe. W celu zapoznania się z zasadami przetwarzania danych przez portale społecznościowe należy zapoznać się z ich polityką przetwarzania Danych osobowych. </p>
        <p>Okres przetwarzania danych uzależnionych jest od świadczonej usługi, celu i podstawy ich przetwarzania. Zasadą jest przetwarzanie danych przez okres wykonywania usługi lub realizacji zamówienia. W przypadku kiedy podstawą przetwarzania Danych osobowych jest zgoda, dane są przetwarzane do czasu jej skutecznego wycofania. W przypadku kiedy podstawą przetwarzania Danych osobowych jest prawnie uzasadniony interes Administratora, dane są przetwarzane do czasu zgłoszenia skutecznego sprzeciwu. </p>
        <p>Okres przetwarzania Danych osobowych, o którym mowa w ust. 2 może ulec przedłużeniu w przypadku kiedy przetwarzanie danych jest niezbędne w celu ustalenia, dochodzenia i obrony ewentualnych roszczeń. Po tym czasie Dane osobowe mogą być przetwarzane wyłącznie w przypadku i w zakresie, w jakim wymagają tego przepisy obowiązującego prawa.</p>
        <p>Po upływie okresu przetwarzania Danych osobowych, Dane osobowe są usuwane lub nieodwracalnie zanonimizowane. </p>
        <h4>§7</h4>
        <h3> POLITYKA COOKIES</h3>
        <p>Dla wygody Użytkowników Serwis używa plików cookies m.in. w celu dostosowania serwisu do potrzeb użytkowników oraz w celach statystycznych. Cookies to niewielkie pliki tekstowe wysyłane przez serwis internetowy, który odwiedza internauta, do urządzenia internauty. </p>
        <p>1. W ramach Serwisu stosowane są dwa typy plików cookies: „sesyjne”  (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika. </p>
        <p>2. W Serwisie wykorzystujemy następujące rodzaje plików Cookies: 
        niezbędne” – umożliwiają korzystanie z usług dostępnych w ramach Serwisu, np. wykorzystywane przy obsłudze autoryzacji użytkowników; <br/>
        „funkcjonalne” – umożliwiają zapamiętanie wybranych przez Użytkownika ustawień i personalizację interfejsu Użytkownika, np. w zakresie wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu Serwisu itp.;  <br/>
        “analityczne (śledzenie i wydajność)” - – umożliwiają pozyskanie szeregu informacji m.in. liczby wizyt i źródeł ruchu w Serwisie. Zebranie tych danych służy do ustalenia które strony są najczęściej odwiedzane i prowadzą do stworzenia statystyk dotyczących ruchu w Serwisie. Zebranie tych danych służy Administratorowi do poprawy wydajności Serwisu. Zgromadzone dane są przetwarzane w postaci zanonimizowanej. Do tego typu cookies należą cookies Google Analitics; <br/>
        „marketingowe (targetowanie i reklama)” – umożliwiają dopasowanie wyświetlanych w Serwisie i poza Serwisem treści, w tym reklam, do zainteresowań Użytkowników. Do prezentowania personalizowanych treści mogą być wykorzystywane dane dotyczące historii przeglądanych stron, aktywności w serwisach (np. historia zakupów, sposób korzystania z usług, rodzaj wyświetlonych treści i reklam) czy dane geolokalizacyjne.  Na podstawie informacji z Serwisu i aktywności Użytkownika w innych serwisach budowany jest profil zainteresowań Użytkownika. <br/> </p>
        <p >3. Podstawą prawną przetwarzania danych w związku ze stosowaniem niezbędnych plików plików cookies jest niezbędność przetwarzania danych osobowych do wykonania umowy (art. 6 ust. 1 lit. b RODO). W przypadku pozostałych plików cookies podstawą przetwarzania danych osobowych jest zgoda Użytkownika (art. 6 ust. 1 lit. a RODO). </p>
        <p>4. Zgoda, o której mowa w ust. 4 jest udzielana za pomocą stosownego formularza wyświetlanego podczas pierwszych odwiedzin Serwisu. Udzielona zgoda może zostać w każdym momencie cofnięta lub dostosowana w odmienny sposób. W celu zmiany lub wycofania udzielonych zgód kliknij TUTAJ</p>
       <p>5. Pliki cookies mogą być instalowane przez Administratora i jego zaufanych partnerów za pośrednictwem Serwisu. Informacje o tym, jak Użytkownik korzysta z Serwisu, Administrator udostępnia zaufanym partnerom społecznościowym, reklamowym i analitycznym, w celu świadczenia jak najwyższej jakości usług w zakresie funkcjonowania Serwisu, analityki, dopasowania oraz personalizacji. Lista zaufanych partnerów znajduje się poniżej:

Google LLC, Google Ireland Limited - polityka prywatności: https://policies.google.com/privacy?hl=pl;

Meta Platforms, Inc. - polityka prywatności: https://www.facebook.com/privacy/policy/ oraz https://www.meta.com/pl/legal/privacy-policy/</p>
       <p>6. Użytkownik może zmienić ustawienia dotyczące plików cookies z poziomu przeglądarki internetowej. Poniżej zamieszczone zostają odnośniki do przeglądarek internetowych (zawierające informacje jak dokonać modyfikacji ich ustawień na urządzeniach końcowych Użytkownika): <br/>
       Chrome - (https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=pl) <br/>
       Internet Explorer - (https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer) <br/>
       Firefox - (https://support.mozilla.org/pl/kb/usuwanie-ciasteczek-i-danych-stron-firefox?redirectlocale=pl&redirectslug=usuwanie-ciasteczek) <br/>
       Opera - (https://help.opera.com/pl/latest/web-preferences/#cookies) <br/>
       Microsoft Edge - (https://support.microsoft.com/pl-pl/microsoft-edge/wy%C5%9Bwietlanie-i-usuwanie-historii-przegl%C4%85darki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4) <br/>
       Safari - (https://support.apple.com/pl-pl/guide/safari/sfri11471/mac) <br/>
       </p>
      <p>7. Zmiana ustawień plików cookies i podobnych technologii może wpłynąć na sposób funkcjonowania Serwisu i świadczonych przez niego usług.</p>
      <h4>§8</h4>
      <h3> LOGI</h3>
      <p>1. Zgodnie z praktyką większości serwisów www Administrator przechowuje zapytania HTTP kierowane do jego serwera (logi serwera). W związku z powyższym Administrator przechowuje następujące informacje: <br/>
      adresy IP, z których użytkownicy przeglądają treści informacyjne naszego serwisu; <br/>
      czas nadejścia zapytania, <br/>
      czas wysłania odpowiedzi, <br/>
      nazwę stacji klienta - identyfikacja realizowana przez protokół HTTP, <br/>
      informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP, <br/>
      adres URL strony poprzednio odwiedzanej przez użytkownika (referer link), <br/>
      informacje o przeglądarce użytkownika. <br/>  </p>
      <p>2. Zebrane logi przechowywane są przez czas nieokreślony jako materiał pomocniczy służący do administrowania Serwisem. Informacje w nich zawarte nie są ujawniane nikomu poza osobami upoważnionymi do administrowania Serwisem. Na podstawie plików logów mogą być generowane statystyki stanowiące pomoc w administrowaniu Serwisem. Zbiorcze podsumowania w postaci takich statystyk nie zawierają żadnych cech identyfikujących osoby odwiedzające serwis.</p>
      <p>3. Informacje zawarte w logach Administrator przetwarza w celach technicznych, administracyjnych, na potrzeby zapewnienia bezpieczeństwa systemu informatycznego oraz zarządzania tym systemem, a także w celach analitycznych i statystycznych – w tym zakresie podstawą prawną przetwarzania Danych osobowych jest prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO).</p>
      <h4>§9</h4>
      <h3> PRZEKAZYWANIE DANYCH POZA EOG</h3>
      <p>1. W ramach korzystania przez Administratora z narzędzi wspierających bieżącą działalność udostępnianych np. przez firmę Google, Dane osobowe Użytkowników mogą być przekazywane do państwa spoza Europejskiego Obszaru Gospodarczego (EOG), w szczególności do Stanów Zjednoczonych Ameryki (USA) lub innego państwa, w którym podmiot z nią współpracujący utrzymuje narzędzia służące do przetwarzania Danych Osobowych przy współpracy z Administratorem. Administrator przekazuje Dane osobowe poza EOG tylko wtedy, gdy jest to konieczne, i z zapewnieniem odpowiedniego stopnia ochrony, przede wszystkim poprzez stosowanie standardowych klauzul umownych wydanych przez Komisję Europejską. </p>
      <h4>§10 </h4>
      <h3> POSTANOWIENIA KOŃCOWE</h3>



    


       
       <Center>


          <Container>


           
          </Container>

          <br/>
          <br/>
          <br/>
          <NewsSection news={[
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1644230433&width=1160',
              title: 'Aloha Summer',
              link: '/products',
              description: 'Everything we create is inspired by our members, real girls, real life. We celebrate what it means to be a girl today. We encourage self-confidence and self-expression, a place where girls from different worlds can come...',
            },
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-4.jpg?v=1644232716&width=540',
              title: 'Kasia',
              link: '/products',
              description: 'We played dress-up with Kasia for the launch of our new collection \'Better Than One\'. Full spring/summer collection available online....',
            },
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-3.jpg?v=1644231998&width=540',
              title: 'Stand by Cools',
              link: '/products',
              description: 'We played dress-up with Kasia for the launch of our new collection \'Better Than One\'. Full spring/summer collection available online....',
            },
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1644230448&width=540',
              title: 'Aloha Summer',
              link: '/products',
              description: 'We played dress-up with Kasia for the launch of our new collection \'Better Than One\'. Full spring/summer collection available online....',
            },
          ]}/>

        </Center>
      </Products>
      <Footer categories={categories} />

    </>
  )

}

export async function getServerSideProps() {
  await mongooseConnect();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(await Category.find())),
    },
  }
}
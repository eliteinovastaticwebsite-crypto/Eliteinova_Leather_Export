import React, { useState } from 'react';
import { Send, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    state: '',
    district: '',
    pincode: '',
    productInterest: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const locationData = {
  'India': {
    'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'],
    'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang'],
    'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'],
    'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
    'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg'],
    'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
    'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Karnal'],
    'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Kullu'],
    'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
    'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum'],
    'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'],
    'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongstoin'],
    'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'],
    'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha'],
    'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur'],
    'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
    'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
    'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut'],
    'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Nainital', 'Mussoorie'],
    'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol'],
    'Delhi': ['New Delhi', 'Dwarka', 'Rohini', 'Karol Bagh']
  },
  'United States': {
    'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa'],
    'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan'],
    'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale'],
    'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'],
    'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
    'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood'],
    'Connecticut': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'],
    'Delaware': ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna'],
    'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    'Georgia': ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens'],
    'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu'],
    'Idaho': ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello'],
    'Illinois': ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford'],
    'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'],
    'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City'],
    'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe'],
    'Kentucky': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'],
    'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'],
    'Maine': ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn'],
    'Maryland': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie'],
    'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'],
    'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor'],
    'Minnesota': ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington'],
    'Mississippi': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'],
    'Missouri': ['Kansas City', 'Saint Louis', 'Springfield', 'Columbia', 'Independence'],
    'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'],
    'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'],
    'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'],
    'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover'],
    'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison'],
    'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'],
    'New York': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
    'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
    'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo'],
    'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton'],
    'Oregon': ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro'],
    'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'],
    'Rhode Island': ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
    'South Carolina': ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Rock Hill'],
    'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown'],
    'Tennessee': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
    'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
    'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'],
    'Vermont': ['Burlington', 'South Burlington', 'Rutland', 'Barre', 'Montpelier'],
    'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News'],
    'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'],
    'West Virginia': ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'],
    'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine'],
    'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs']
  },
  'United Kingdom': {
    'England': ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
    'Scotland': ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness'],
    'Wales': ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Barry'],
    'Northern Ireland': ['Belfast', 'Derry', 'Lisburn', 'Newry', 'Armagh']
  },
  'Canada': {
    'Alberta': ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray'],
    'British Columbia': ['Vancouver', 'Victoria', 'Kelowna', 'Abbotsford', 'Nanaimo'],
    'Manitoba': ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'],
    'New Brunswick': ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi'],
    'Newfoundland and Labrador': ['St. Johns', 'Mount Pearl', 'Corner Brook', 'Conception Bay South'],
    'Nova Scotia': ['Halifax', 'Sydney', 'Dartmouth', 'Truro', 'New Glasgow'],
    'Ontario': ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'London'],
    'Prince Edward Island': ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall'],
    'Quebec': ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil'],
    'Saskatchewan': ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current']
  },
  'Australia': {
    'New South Wales': ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Maitland'],
    'Victoria': ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton'],
    'Queensland': ['Brisbane', 'Gold Coast', 'Townsville', 'Cairns', 'Toowoomba'],
    'Western Australia': ['Perth', 'Mandurah', 'Bunbury', 'Albany', 'Kalgoorlie'],
    'South Australia': ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge'],
    'Tasmania': ['Hobart', 'Launceston', 'Devonport', 'Burnie'],
    'Northern Territory': ['Darwin', 'Alice Springs', 'Palmerston', 'Katherine'],
    'Australian Capital Territory': ['Canberra']
  },
  'China': {
    'Guangdong': ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan', 'Zhuhai'],
    'Shandong': ['Jinan', 'Qingdao', 'Yantai', 'Weifang', 'Zibo'],
    'Henan': ['Zhengzhou', 'Luoyang', 'Kaifeng', 'Anyang', 'Xinxiang'],
    'Sichuan': ['Chengdu', 'Mianyang', 'Deyang', 'Nanchong', 'Yibin'],
    'Jiangsu': ['Nanjing', 'Suzhou', 'Wuxi', 'Changzhou', 'Xuzhou'],
    'Hebei': ['Shijiazhuang', 'Tangshan', 'Baoding', 'Handan', 'Qinhuangdao'],
    'Hunan': ['Changsha', 'Zhuzhou', 'Xiangtan', 'Hengyang', 'Yueyang'],
    'Anhui': ['Hefei', 'Wuhu', 'Bengbu', 'Huainan', 'Maanshan'],
    'Hubei': ['Wuhan', 'Yichang', '襄阳', 'Jingzhou', 'Huangshi'],
    'Zhejiang': ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Shaoxing'],
    'Beijing': ['Beijing'],
    'Shanghai': ['Shanghai'],
    'Tianjin': ['Tianjin'],
    'Chongqing': ['Chongqing']
  },
  'Brazil': {
    'São Paulo': ['São Paulo', 'Campinas', 'Santos', 'Sorocaba', 'Ribeirão Preto'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Nova Iguaçu'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'],
    'Bahia': ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari'],
    'Paraná': ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel'],
    'Rio Grande do Sul': ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas'],
    'Pernambuco': ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru'],
    'Ceará': ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú'],
    'Pará': ['Belém', 'Ananindeua', 'Santarém', 'Marabá'],
    'Santa Catarina': ['Florianópolis', 'Joinville', 'Blumenau', 'São José']
  },
  'Germany': {
    'Bavaria': ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Ingolstadt'],
    'North Rhine-Westphalia': ['Cologne', 'Dortmund', 'Essen', 'Düsseldorf', 'Duisburg'],
    'Baden-Württemberg': ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg'],
    'Lower Saxony': ['Hanover', 'Brunswick', 'Oldenburg', 'Osnabrück', 'Wolfsburg'],
    'Hesse': ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt', 'Offenbach'],
    'Saxony': ['Leipzig', 'Dresden', 'Chemnitz', 'Zwickau'],
    'Rhineland-Palatinate': ['Mainz', 'Ludwigshafen', 'Koblenz', 'Trier'],
    'Berlin': ['Berlin'],
    'Hamburg': ['Hamburg'],
    'Schleswig-Holstein': ['Kiel', 'Lübeck', 'Flensburg', 'Neumünster']
  },
  'France': {
    'Île-de-France': ['Paris', 'Boulogne-Billancourt', 'Saint-Denis', 'Argenteuil'],
    'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Saint-Étienne', 'Villeurbanne'],
    'Provence-Alpes-Côte d\'Azur': ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence'],
    'Nouvelle-Aquitaine': ['Bordeaux', 'Limoges', 'Poitiers', 'Pau', 'La Rochelle'],
    'Occitanie': ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan'],
    'Hauts-de-France': ['Lille', 'Amiens', 'Roubaix', 'Tourcoing'],
    'Normandy': ['Rouen', 'Le Havre', 'Caen', 'Cherbourg'],
    'Brittany': ['Rennes', 'Brest', 'Quimper', 'Lorient'],
    'Grand Est': ['Strasbourg', 'Reims', 'Metz', 'Mulhouse'],
    'Pays de la Loire': ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire']
  },
  'Japan': {
    'Tokyo': ['Tokyo', 'Hachioji', 'Machida', 'Fuchu'],
    'Osaka': ['Osaka', 'Sakai', 'Higashiosaka', 'Toyonaka'],
    'Kanagawa': ['Yokohama', 'Kawasaki', 'Sagamihara', 'Fujisawa'],
    'Aichi': ['Nagoya', 'Toyota', 'Okazaki', 'Ichinomiya'],
    'Hokkaido': ['Sapporo', 'Asahikawa', 'Hakodate', 'Kushiro'],
    'Fukuoka': ['Fukuoka', 'Kitakyushu', 'Kurume', 'Iizuka'],
    'Hyogo': ['Kobe', 'Himeji', 'Nishinomiya', 'Amagasaki'],
    'Saitama': ['Saitama', 'Kawaguchi', 'Kawagoe', 'Tokorozawa'],
    'Chiba': ['Chiba', 'Funabashi', 'Matsudo', 'Ichikawa'],
    'Kyoto': ['Kyoto', 'Uji', 'Kameoka']
  },
  'Mexico': {
    'Mexico City': ['Mexico City'],
    'Jalisco': ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá'],
    'Nuevo León': ['Monterrey', 'San Nicolás de los Garza', 'Guadalupe', 'Apodaca'],
    'Puebla': ['Puebla', 'Tehuacán', 'San Martín Texmelucan'],
    'Guanajuato': ['León', 'Irapuato', 'Celaya', 'Salamanca'],
    'Chihuahua': ['Juárez', 'Chihuahua', 'Delicias', 'Cuauhtémoc'],
    'Veracruz': ['Veracruz', 'Xalapa', 'Coatzacoalcos', 'Córdoba'],
    'Baja California': ['Tijuana', 'Mexicali', 'Ensenada', 'Rosarito'],
    'Tamaulipas': ['Reynosa', 'Matamoros', 'Nuevo Laredo', 'Tampico'],
    'Sinaloa': ['Culiacán', 'Mazatlán', 'Los Mochis', 'Guasave']
  },
  'Italy': {
    'Lazio': ['Rome', 'Latina', 'Guidonia Montecelio', 'Fiumicino'],
    'Lombardy': ['Milan', 'Brescia', 'Monza', 'Bergamo', 'Como'],
    'Campania': ['Naples', 'Salerno', 'Giugliano in Campania', 'Torre del Greco'],
    'Sicily': ['Palermo', 'Catania', 'Messina', 'Syracuse'],
    'Veneto': ['Venice', 'Verona', 'Padua', 'Vicenza'],
    'Piedmont': ['Turin', 'Novara', 'Alessandria', 'Asti'],
    'Emilia-Romagna': ['Bologna', 'Modena', 'Parma', 'Reggio Emilia'],
    'Apulia': ['Bari', 'Taranto', 'Foggia', 'Lecce'],
    'Tuscany': ['Florence', 'Prato', 'Livorno', 'Arezzo'],
    'Liguria': ['Genoa', 'La Spezia', 'Savona', 'Sanremo']
  },
  'Spain': {
    'Madrid': ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada'],
    'Catalonia': ['Barcelona', 'L\'Hospitalet de Llobregat', 'Badalona', 'Terrassa'],
    'Andalusia': ['Seville', 'Málaga', 'Córdoba', 'Granada', 'Almería'],
    'Valencia': ['Valencia', 'Alicante', 'Elche', 'Castellón de la Plana'],
    'Basque Country': ['Bilbao', 'Vitoria-Gasteiz', 'Donostia-San Sebastián'],
    'Galicia': ['Vigo', 'A Coruña', 'Ourense', 'Lugo'],
    'Castile and León': ['Valladolid', 'Burgos', 'Salamanca', 'León'],
    'Canary Islands': ['Las Palmas', 'Santa Cruz de Tenerife'],
    'Aragon': ['Zaragoza', 'Huesca', 'Teruel'],
    'Murcia': ['Murcia', 'Cartagena', 'Lorca']
  },
  'South Korea': {
    'Seoul': ['Seoul'],
    'Busan': ['Busan'],
    'Gyeonggi': ['Suwon', 'Goyang', 'Yongin', 'Seongnam'],
    'Incheon': ['Incheon'],
    'Daegu': ['Daegu'],
    'Daejeon': ['Daejeon'],
    'Gwangju': ['Gwangju'],
    'Ulsan': ['Ulsan'],
    'Gangwon': ['Chuncheon', 'Wonju', 'Gangneung'],
    'North Gyeongsang': ['Pohang', 'Gumi', 'Gyeongju']
  },
  'Russia': {
    'Moscow': ['Moscow'],
    'Saint Petersburg': ['Saint Petersburg'],
    'Moscow Oblast': ['Balashikha', 'Khimki', 'Podolsk', 'Mytishchi'],
    'Sverdlovsk Oblast': ['Yekaterinburg', 'Nizhny Tagil', 'Kamensk-Uralsky'],
    'Krasnodar Krai': ['Krasnodar', 'Sochi', 'Novorossiysk', 'Armavir'],
    'Tatarstan': ['Kazan', 'Naberezhnye Chelny', 'Nizhnekamsk'],
    'Chelyabinsk Oblast': ['Chelyabinsk', 'Magnitogorsk', 'Zlatoust'],
    'Novosibirsk Oblast': ['Novosibirsk', 'Berdsk', 'Iskitim'],
    'Samara Oblast': ['Samara', 'Tolyatti', 'Syzran'],
    'Rostov Oblast': ['Rostov-on-Don', 'Taganrog', 'Shakhty']
  },
  'Argentina': {
    'Buenos Aires': ['Buenos Aires', 'La Plata', 'Mar del Plata', 'Bahía Blanca'],
    'Córdoba': ['Córdoba', 'Villa María', 'Río Cuarto'],
    'Santa Fe': ['Rosario', 'Santa Fe', 'Rafaela'],
    'Mendoza': ['Mendoza', 'San Rafael', 'Godoy Cruz'],
    'Tucumán': ['San Miguel de Tucumán', 'Yerba Buena'],
    'Salta': ['Salta', 'San Ramón de la Nueva Orán'],
    'Entre Ríos': ['Paraná', 'Concordia', 'Gualeguaychú'],
    'Chaco': ['Resistencia', 'Presidencia Roque Sáenz Peña'],
    'Misiones': ['Posadas', 'Oberá', 'Eldorado'],
    'Neuquén': ['Neuquén', 'San Martín de los Andes', 'Cutral-Có']
  },
  'Nigeria': {
    'Lagos': ['Lagos', 'Ikeja', 'Epe'],
    'Kano': ['Kano'],
    'Kaduna': ['Kaduna', 'Zaria'],
    'Rivers': ['Port Harcourt', 'Obio-Akpor'],
    'Oyo': ['Ibadan', 'Ogbomoso', 'Oyo'],
    'Abuja': ['Abuja'],
    'Anambra': ['Onitsha', 'Nnewi', 'Awka'],
    'Enugu': ['Enugu', 'Nsukka'],
    'Ogun': ['Abeokuta', 'Ijebu Ode', 'Sagamu'],
    'Delta': ['Warri', 'Asaba', 'Sapele']
  },
  'Egypt': {
    'Cairo': ['Cairo', 'Giza', 'Shubra El-Kheima'],
    'Alexandria': ['Alexandria', 'Borg El Arab'],
    'Giza': ['Giza', '6th of October City'],
    'Qalyubia': ['Shubra El Kheima', 'Banha', 'Qalyub'],
    'Sharqia': ['Zagazig', '10th of Ramadan City', 'Bilbeis'],
    'Dakahlia': ['Mansoura', 'Mit Ghamr', 'Talkha'],
    'Beheira': ['Damanhur', 'Kafr el-Dawwar'],
    'Asyut': ['Asyut', 'Abnub'],
    'Monufia': ['Shibin El Kom', 'Menouf'],
    'Gharbia': ['Tanta', 'El Mahalla El Kubra']
  },
  'South Africa': {
    'Gauteng': ['Johannesburg', 'Pretoria', 'Soweto', 'Benoni'],
    'KwaZulu-Natal': ['Durban', 'Pietermaritzburg', 'Newcastle'],
    'Western Cape': ['Cape Town', 'Stellenbosch', 'George'],
    'Eastern Cape': ['Port Elizabeth', 'East London', 'Mthatha'],
    'Limpopo': ['Polokwane', 'Tzaneen', 'Musina'],
    'Mpumalanga': ['Nelspruit', 'Witbank', 'Middelburg'],
    'North West': ['Rustenburg', 'Mahikeng', 'Potchefstroom'],
    'Free State': ['Bloemfontein', 'Welkom', 'Bethlehem'],
    'Northern Cape': ['Kimberley', 'Upington', 'Kuruman']
  },
  'Indonesia': {
    'Java': ['Jakarta', 'Surabaya', 'Bandung', 'Semarang', 'Yogyakarta'],
    'Sumatra': ['Medan', 'Palembang', 'Pekanbaru', 'Padang'],
    'Kalimantan': ['Banjarmasin', 'Pontianak', 'Balikpapan', 'Samarinda'],
    'Sulawesi': ['Makassar', 'Manado', 'Palu', 'Kendari'],
    'Bali': ['Denpasar', 'Singaraja'],
    'West Java': ['Bandung', 'Bekasi', 'Depok', 'Bogor'],
    'East Java': ['Surabaya', 'Malang', 'Kediri', 'Madiun'],
    'Central Java': ['Semarang', 'Solo', 'Pekalongan'],
    'North Sumatra': ['Medan', 'Binjai', 'Pematangsiantar', 'Tebing Tinggi']
  },
  'Pakistan': {
    'Punjab': ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala'],
    'Sindh': ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana'],
    'Khyber Pakhtunkhwa': ['Peshawar', 'Mardan', 'Mingora', 'Abbottabad'],
    'Balochistan': ['Quetta', 'Gwadar', 'Turbat', 'Khuzdar'],
    'Islamabad': ['Islamabad']
  },
  'Bangladesh': {
    'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj', 'Tongi'],
    'Chittagong': ['Chittagong', 'Cox\'s Bazar', 'Comilla'],
    'Rajshahi': ['Rajshahi', 'Bogra', 'Pabna'],
    'Khulna': ['Khulna', 'Jessore', 'Satkhira'],
    'Sylhet': ['Sylhet', 'Moulvibazar', 'Habiganj'],
    'Barisal': ['Barisal', 'Patuakhali', 'Bhola'],
    'Rangpur': ['Rangpur', 'Dinajpur', 'Kurigram'],
    'Mymensingh': ['Mymensingh', 'Jamalpur', 'Netrokona']
  },
  'Turkey': {
    'Istanbul': ['Istanbul'],
    'Ankara': ['Ankara'],
    'Izmir': ['Izmir', 'Manisa', 'Aydin'],
    'Antalya': ['Antalya', 'Alanya', 'Manavgat'],
    'Bursa': ['Bursa', 'Gemlik', 'Inegol'],
    'Adana': ['Adana', 'Ceyhan', 'Kozan'],
    'Gaziantep': ['Gaziantep', 'Nurdagi', 'Islahiye'],
    'Konya': ['Konya', 'Eregli', 'Aksehir'],
    'Kocaeli': ['Izmit', 'Gebze', 'Derince'],
    'Mersin': ['Mersin', 'Tarsus', 'Silifke']
  },
  'Iran': {
    'Tehran': ['Tehran', 'Rey', 'Shemiranat'],
    'Khorasan Razavi': ['Mashhad', 'Neyshabur', 'Sabzevar'],
    'Isfahan': ['Isfahan', 'Kashan', 'Najafabad'],
    'Fars': ['Shiraz', 'Marvdasht', 'Jahrom'],
    'Khuzestan': ['Ahvaz', 'Khorramshahr', 'Abadan'],
    'Mazandaran': ['Sari', 'Babol', 'Amol'],
    'East Azerbaijan': ['Tabriz', 'Maragheh', 'Marand'],
    'Kerman': ['Kerman', 'Rafsanjan', 'Sirjan'],
    'Gilan': ['Rasht', 'Bandar-e Anzali', 'Lahijan']
  },
  'Saudi Arabia': {
    'Riyadh': ['Riyadh', 'Al Kharj', 'Ad Diriyah'],
    'Makkah': ['Jeddah', 'Mecca', 'Ta\'if', 'Rabigh'],
    'Eastern Province': ['Dammam', 'Khobar', 'Dhahran', 'Jubail'],
    'Madinah': ['Medina', 'Yanbu', 'Badr'],
    'Asir': ['Abha', 'Khamis Mushait', 'Bisha'],
    'Qassim': ['Buraydah', 'Unayzah', 'Ar Rass'],
    'Tabuk': ['Tabuk', 'Duba', 'Taymaa'],
    'Ha\'il': ['Ha\'il', 'Baqaa'],
    'Jizan': ['Jizan', 'Sabya', 'Abu Arish']
  },
  'Thailand': {
    'Bangkok': ['Bangkok'],
    'Chiang Mai': ['Chiang Mai', 'Lamphun', 'Lampang'],
    'Nakhon Ratchasima': ['Nakhon Ratchasima', 'Pak Chong'],
    'Chon Buri': ['Pattaya', 'Chon Buri', 'Si Racha'],
    'Songkhla': ['Hat Yai', 'Songkhla'],
    'Khon Kaen': ['Khon Kaen', 'Mueang'],
    'Nonthaburi': ['Nonthaburi', 'Pak Kret'],
    'Udon Thani': ['Udon Thani', 'Ban Dung'],
    'Rayong': ['Rayong', 'Map Ta Phut'],
    'Phuket': ['Phuket', 'Kathu', 'Thalang']
  },
  'Philippines': {
    'Metro Manila': ['Manila', 'Quezon City', 'Caloocan', 'Makati', 'Pasig'],
    'Cebu': ['Cebu City', 'Mandaue', 'Lapu-Lapu', 'Toledo'],
    'Davao': ['Davao City', 'Tagum', 'Panabo', 'Digos'],
    'Cavite': ['Bacoor', 'Dasmariñas', 'Imus', 'Cavite City'],
    'Bulacan': ['Malolos', 'Meycauayan', 'San Jose del Monte'],
    'Laguna': ['Calamba', 'Santa Rosa', 'Biñan', 'San Pedro'],
    'Rizal': ['Antipolo', 'Cainta', 'Taytay', 'Rodriguez'],
    'Pampanga': ['San Fernando', 'Angeles', 'Mabalacat'],
    'Iloilo': ['Iloilo City', 'Passi', 'Oton'],
    'Batangas': ['Batangas City', 'Lipa', 'Tanauan']
  },
  'Vietnam': {
    'Hanoi': ['Hanoi'],
    'Ho Chi Minh City': ['Ho Chi Minh City'],
    'Da Nang': ['Da Nang', 'Hoi An'],
    'Hai Phong': ['Hai Phong'],
    'Can Tho': ['Can Tho'],
    'Binh Duong': ['Thu Dau Mot', 'Di An'],
    'Dong Nai': ['Bien Hoa', 'Long Khanh'],
    'Khanh Hoa': ['Nha Trang', 'Cam Ranh'],
    'Thanh Hoa': ['Thanh Hoa'],
    'Thua Thien Hue': ['Hue']
  },
  'Malaysia': {
    'Selangor': ['Shah Alam', 'Petaling Jaya', 'Subang Jaya', 'Klang'],
    'Johor': ['Johor Bahru', 'Muar', 'Batu Pahat', 'Kluang'],
    'Kuala Lumpur': ['Kuala Lumpur'],
    'Penang': ['George Town', 'Butterworth', 'Bukit Mertajam'],
    'Perak': ['Ipoh', 'Taiping', 'Teluk Intan'],
    'Sabah': ['Kota Kinabalu', 'Sandakan', 'Tawau'],
    'Sarawak': ['Kuching', 'Miri', 'Sibu'],
    'Pahang': ['Kuantan', 'Temerloh', 'Bentong'],
    'Kedah': ['Alor Setar', 'Sungai Petani', 'Kulim'],
    'Negeri Sembilan': ['Seremban', 'Port Dickson', 'Nilai']
  },
  'Singapore': {
    'Singapore': ['Singapore']
  },
  'New Zealand': {
    'Auckland': ['Auckland', 'Manukau', 'North Shore', 'Waitakere'],
    'Wellington': ['Wellington', 'Lower Hutt', 'Upper Hutt', 'Porirua'],
    'Canterbury': ['Christchurch', 'Timaru', 'Ashburton'],
    'Waikato': ['Hamilton', 'Tauranga', 'Rotorua'],
    'Otago': ['Dunedin', 'Queenstown', 'Oamaru'],
    'Bay of Plenty': ['Tauranga', 'Rotorua'],
    'Manawatu-Wanganui': ['Palmerston North', 'Whanganui'],
    'Hawke\'s Bay': ['Napier', 'Hastings'],
    'Northland': ['Whangarei', 'Kerikeri'],
    'Taranaki': ['New Plymouth']
  },
  'Poland': {
    'Masovian': ['Warsaw', 'Radom', 'Płock'],
    'Lesser Poland': ['Kraków', 'Tarnów', 'Nowy Sącz'],
    'Silesian': ['Katowice', 'Częstochowa', 'Sosnowiec', 'Gliwice'],
    'Greater Poland': ['Poznań', 'Kalisz', 'Piła'],
    'Lower Silesian': ['Wrocław', 'Wałbrzych', 'Legnica'],
    'Pomeranian': ['Gdańsk', 'Gdynia', 'Sopot'],
    'Łódź': ['Łódź', 'Piotrków Trybunalski'],
    'West Pomeranian': ['Szczecin', 'Koszalin', 'Stargard'],
    'Lublin': ['Lublin', 'Chełm', 'Zamość'],
    'Kuyavian-Pomeranian': ['Bydgoszcz', 'Toruń', 'Włocławek']
  },
  'Netherlands': {
    'North Holland': ['Amsterdam', 'Haarlem', 'Zaanstad', 'Alkmaar'],
    'South Holland': ['Rotterdam', 'The Hague', 'Leiden', 'Dordrecht'],
    'North Brabant': ['Eindhoven', '\'s-Hertogenbosch', 'Tilburg', 'Breda'],
    'Utrecht': ['Utrecht', 'Amersfoort', 'Nieuwegein'],
    'Gelderland': ['Arnhem', 'Nijmegen', 'Apeldoorn', 'Ede'],
    'Limburg': ['Maastricht', 'Venlo', 'Heerlen'],
    'Overijssel': ['Enschede', 'Zwolle', 'Almelo'],
    'Groningen': ['Groningen'],
    'Flevoland': ['Almere', 'Lelystad'],
    'Friesland': ['Leeuwarden', 'Heerenveen']
  },
  'Belgium': {
    'Flemish Brabant': ['Leuven', 'Vilvoorde', 'Halle'],
    'Antwerp': ['Antwerp', 'Mechelen', 'Turnhout'],
    'East Flanders': ['Ghent', 'Aalst', 'Sint-Niklaas'],
    'West Flanders': ['Bruges', 'Kortrijk', 'Ostend'],
    'Liège': ['Liège', 'Seraing', 'Verviers'],
    'Hainaut': ['Charleroi', 'Mons', 'La Louvière'],
    'Brussels': ['Brussels'],
    'Walloon Brabant': ['Wavre', 'Ottignies-Louvain-la-Neuve'],
    'Namur': ['Namur'],
    'Limburg': ['Hasselt', 'Genk']
  },
  'Sweden': {
    'Stockholm': ['Stockholm', 'Solna', 'Sundbyberg'],
    'Västra Götaland': ['Gothenburg', 'Borås', 'Mölndal'],
    'Skåne': ['Malmö', 'Helsingborg', 'Lund'],
    'Uppsala': ['Uppsala', 'Enköping'],
    'Östergötland': ['Linköping', 'Norrköping'],
    'Gävleborg': ['Gävle', 'Sandviken'],
    'Jönköping': ['Jönköping', 'Värnamo'],
    'Halland': ['Halmstad', 'Varberg'],
    'Västmanland': ['Västerås', 'Köping'],
    'Örebro': ['Örebro', 'Kumla']
  },
  'Norway': {
    'Oslo': ['Oslo'],
    'Viken': ['Drammen', 'Fredrikstad', 'Sarpsborg'],
    'Vestland': ['Bergen', 'Haugesund'],
    'Rogaland': ['Stavanger', 'Sandnes'],
    'Trøndelag': ['Trondheim', 'Steinkjer'],
    'Innlandet': ['Lillehammer', 'Hamar'],
    'Vestfold og Telemark': ['Tønsberg', 'Sandefjord', 'Skien'],
    'Agder': ['Kristiansand', 'Arendal'],
    'Nordland': ['Bodø', 'Narvik'],
    'Troms og Finnmark': ['Tromsø', 'Alta']
  },
  'Denmark': {
    'Capital Region': ['Copenhagen', 'Frederiksberg', 'Gentofte'],
    'Central Denmark': ['Aarhus', 'Randers', 'Horsens'],
    'Southern Denmark': ['Odense', 'Esbjerg', 'Kolding'],
    'Zealand': ['Roskilde', 'Køge', 'Holbæk'],
    'North Denmark': ['Aalborg', 'Hjørring', 'Frederikshavn']
  },
  'Finland': {
    'Uusimaa': ['Helsinki', 'Espoo', 'Vantaa'],
    'Pirkanmaa': ['Tampere', 'Nokia'],
    'Southwest Finland': ['Turku', 'Salo'],
    'North Ostrobothnia': ['Oulu', 'Raahe'],
    'Central Finland': ['Jyväskylä'],
    'Päijänne Tavastia': ['Lahti'],
    'Kymenlaakso': ['Kouvola', 'Kotka'],
    'Lapland': ['Rovaniemi', 'Kemi'],
    'Kanta-Häme': ['Hämeenlinna'],
    'Satakunta': ['Pori', 'Rauma']
  },
  'Greece': {
    'Attica': ['Athens', 'Piraeus', 'Peristeri'],
    'Central Macedonia': ['Thessaloniki', 'Serres', 'Katerini'],
    'Crete': ['Heraklion', 'Chania', 'Rethymno'],
    'Western Greece': ['Patras', 'Agrinio'],
    'Thessaly': ['Larissa', 'Volos'],
    'Peloponnese': ['Kalamata', 'Tripoli'],
    'Epirus': ['Ioannina', 'Preveza'],
    'Central Greece': ['Lamia', 'Chalkida'],
    'South Aegean': ['Rhodes', 'Kos'],
    'Eastern Macedonia and Thrace': ['Kavala', 'Xanthi']
  },
  'Portugal': {
    'Lisbon': ['Lisbon', 'Amadora', 'Loures'],
    'Porto': ['Porto', 'Vila Nova de Gaia', 'Matosinhos'],
    'Setúbal': ['Setúbal', 'Almada', 'Barreiro'],
    'Faro': ['Faro', 'Portimão', 'Olhão'],
    'Braga': ['Braga', 'Guimarães'],
    'Aveiro': ['Aveiro', 'Ílhavo'],
    'Coimbra': ['Coimbra', 'Figueira da Foz'],
    'Leiria': ['Leiria', 'Marinha Grande'],
    'Viseu': ['Viseu'],
    'Azores': ['Ponta Delgada', 'Angra do Heroísmo']
  },
  'Chile': {
    'Santiago Metropolitan': ['Santiago', 'Puente Alto', 'Maipú'],
    'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Quilpué'],
    'Biobío': ['Concepción', 'Talcahuano', 'Los Ángeles'],
    'Araucanía': ['Temuco', 'Villarrica'],
    'Maule': ['Talca', 'Curicó'],
    'O\'Higgins': ['Rancagua', 'San Fernando'],
    'Los Lagos': ['Puerto Montt', 'Osorno'],
    'Antofagasta': ['Antofagasta', 'Calama'],
    'Coquimbo': ['La Serena', 'Coquimbo'],
    'Tarapacá': ['Iquique', 'Alto Hospicio']
  },
  'Colombia': {
    'Bogotá': ['Bogotá'],
    'Antioquia': ['Medellín', 'Bello', 'Itagüí'],
    'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura'],
    'Atlántico': ['Barranquilla', 'Soledad', 'Malambo'],
    'Santander': ['Bucaramanga', 'Floridablanca', 'Girón'],
    'Bolívar': ['Cartagena', 'Magangué'],
    'Cundinamarca': ['Soacha', 'Facatativá', 'Chía'],
    'Norte de Santander': ['Cúcuta', 'Ocaña'],
    'Tolima': ['Ibagué', 'Espinal'],
    'Risaralda': ['Pereira', 'Dosquebradas']
  },
  'Peru': {
    'Lima': ['Lima', 'Callao'],
    'Arequipa': ['Arequipa'],
    'La Libertad': ['Trujillo', 'Chimbote'],
    'Piura': ['Piura', 'Sullana'],
    'Lambayeque': ['Chiclayo'],
    'Cusco': ['Cusco'],
    'Junín': ['Huancayo'],
    'Loreto': ['Iquitos'],
    'Puno': ['Juliaca', 'Puno'],
    'Cajamarca': ['Cajamarca']
  },
  'Kenya': {
    'Nairobi': ['Nairobi'],
    'Mombasa': ['Mombasa'],
    'Nakuru': ['Nakuru'],
    'Kiambu': ['Thika', 'Kikuyu'],
    'Machakos': ['Machakos'],
    'Kisumu': ['Kisumu'],
    'Uasin Gishu': ['Eldoret'],
    'Nyeri': ['Nyeri'],
    'Meru': ['Meru'],
    'Kajiado': ['Kajiado']
  },
  'Ghana': {
    'Greater Accra': ['Accra', 'Tema'],
    'Ashanti': ['Kumasi', 'Obuasi'],
    'Western': ['Sekondi-Takoradi'],
    'Eastern': ['Koforidua'],
    'Northern': ['Tamale'],
    'Central': ['Cape Coast'],
    'Volta': ['Ho'],
    'Brong-Ahafo': ['Sunyani'],
    'Upper East': ['Bolgatanga'],
    'Upper West': ['Wa']
  },
  'Morocco': {
    'Casablanca-Settat': ['Casablanca', 'Mohammedia', 'Settat'],
    'Rabat-Salé-Kénitra': ['Rabat', 'Salé', 'Kénitra'],
    'Fès-Meknès': ['Fès', 'Meknès'],
    'Marrakesh-Safi': ['Marrakesh', 'Safi'],
    'Tangier-Tétouan-Al Hoceïma': ['Tangier', 'Tétouan'],
    'Souss-Massa': ['Agadir', 'Inezgane'],
    'Oriental': ['Oujda', 'Nador'],
    'Béni Mellal-Khénifra': ['Béni Mellal', 'Khouribga'],
    'Drâa-Tafilalet': ['Errachidia'],
    'Laâyoune-Sakia El Hamra': ['Laâyoune']
  },
  'Algeria': {
    'Algiers': ['Algiers'],
    'Oran': ['Oran', 'Arzew'],
    'Constantine': ['Constantine'],
    'Annaba': ['Annaba'],
    'Blida': ['Blida'],
    'Batna': ['Batna'],
    'Sétif': ['Sétif'],
    'Sidi Bel Abbès': ['Sidi Bel Abbès'],
    'Biskra': ['Biskra'],
    'Tébessa': ['Tébessa']
  },
  'Ethiopia': {
    'Addis Ababa': ['Addis Ababa'],
    'Oromia': ['Adama', 'Jimma', 'Bishoftu'],
    'Amhara': ['Bahir Dar', 'Gondar', 'Dessie'],
    'Tigray': ['Mekelle', 'Adigrat'],
    'Southern Nations': ['Hawassa', 'Arba Minch'],
    'Somali': ['Jijiga'],
    'Dire Dawa': ['Dire Dawa'],
    'Harari': ['Harar'],
    'Afar': ['Semera'],
    'Benishangul-Gumuz': ['Asosa']
  }
   
  };

  const productCategories = [
    'Shoes',
    'Casual Shoes',
    'Boots',
    'Formal Shoes',
    'Women Handbags',
    'Sling Bags',
    'Small Crossbody Bags',
    'Trolley Bags',
    'Duffle Bags',
    'Leather Travel Bags',
    'Men\'s Backpacks',
    'Women\'s Backpacks',
    'Men\'s Wallet',
    'Passport Holder',
    'Belt'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      if (name === 'country') {
        newData.state = '';
        newData.district = '';
      } else if (name === 'state') {
        newData.district = '';
      }
      
      return newData;
    });
  };

  const handleProductToggle = (product) => {
    setFormData(prev => ({
      ...prev,
      productInterest: prev.productInterest.includes(product)
        ? prev.productInterest.filter(p => p !== product)
        : [...prev.productInterest, product]
    }));
  };

  const removeProduct = (product) => {
    setFormData(prev => ({
      ...prev,
      productInterest: prev.productInterest.filter(p => p !== product)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', formData);

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        state: '',
        district: '',
        pincode: '',
        productInterest: [],
        message: ''
      });

      setCurrentStep(0);
      setIsSubmitting(false);

      if (onClose) onClose();
    }, 1500);
  };

  const getStates = () => {
    return formData.country && locationData[formData.country] 
      ? Object.keys(locationData[formData.country]) 
      : [];
  };

  const getDistricts = () => {
    return formData.country && formData.state && locationData[formData.country]?.[formData.state]
      ? locationData[formData.country][formData.state]
      : [];
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Personal Information</h3>
            <p className="form-section-description">Tell us about yourself</p>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Location Details</h3>
            <p className="form-section-description">Where are you located?</p>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="country" className="form-label">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select Country</option>
                  {Object.keys(locationData).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pincode" className="form-label">Pincode / ZIP Code</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter pincode"
                />
              </div>

              <div className="form-group">
                <label htmlFor="state" className="form-label">State / Province</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!formData.country}
                  className="form-input"
                >
                  <option value="">Select State</option>
                  {getStates().map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="district" className="form-label">District / Region</label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  disabled={!formData.state}
                  className="form-input"
                >
                  <option value="">Select District</option>
                  {getDistricts().map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Product Selection</h3>
            <p className="form-section-description">Select products you're interested in</p>
            
            <div className="product-selection-wrapper">
              <div className="product-select-container">
                <div className="product-checkbox-list">
                  {productCategories.map((product) => (
                    <label
                      key={product}
                      className="product-checkbox-label"
                    >
                      <input
                        type="checkbox"
                        checked={formData.productInterest.includes(product)}
                        onChange={() => handleProductToggle(product)}
                        className="product-checkbox"
                      />
                      <span className="product-checkbox-text">{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.productInterest.length > 0 && (
                <div className="selected-products-section">
                  <p className="selected-products-label">Selected Products:</p>
                  <div className="selected-products-tags">
                    {formData.productInterest.map((product) => (
                      <span key={product} className="product-tag">
                        {product}
                        <button
                          type="button"
                          onClick={() => removeProduct(product)}
                          className="product-tag-remove"
                          aria-label={`Remove ${product}`}
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Message & Review</h3>
            <p className="form-section-description">Share your requirements and review your submission</p>
            
            <div className="message-review-container">
              <div className="message-section">
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Tell us about your requirements, order quantity, and environment."
                  />
                  {!formData.message && (
                    <span className="field-hint">Please fill in this field.</span>
                  )}
                </div>
              </div>

              <div className="review-section">
                <h4 className="review-title">Review Your Information</h4>
                <div className="review-info">
                  <div className="review-item">
                    <span className="review-label">Name:</span>
                    <span className="review-value">{formData.name || 'Not provided'}</span>
                  </div>
                  
                  <div className="review-item">
                    <span className="review-label">Email:</span>
                    <span className="review-value">{formData.email || 'Not provided'}</span>
                  </div>
                  
                  <div className="review-item">
                    <span className="review-label">Location:</span>
                    <span className="review-value">
                      {[formData.country, formData.state, formData.district]
                        .filter(Boolean)
                        .join(', ') || 'Not provided'}
                    </span>
                  </div>
                  
                  <div className="review-item">
                    <span className="review-label">Products:</span>
                    <span className="review-value">
                      {formData.productInterest.length > 0 
                        ? formData.productInterest.join(', ')
                        : 'None selected'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-content">
        {/* Left Column - Contact Info */}
        <div className="contact-info-column">
          <div className="contact-info-inner">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            
            {/* Step Indicator */}
            <div className="step-indicator">
              <div className="step-indicator-title">Form Progress</div>
              {['Personal Info', 'Location', 'Products', 'Message'].map((step, index) => (
                <div 
                  key={index} 
                  className={`step-indicator-item ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form with Slider */}
        <div className="contact-form-column">
          {submitted ? (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <>
              {/* Progress Dots */}
              <div className="form-progress">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`progress-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                    onClick={() => setCurrentStep(index)}
                    title={`Step ${index + 1}`}
                  />
                ))}
              </div>

              {/* Form Content */}
              <div className="form-section-slider">
                {renderStepContent()}
              </div>

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="nav-button prev"
                  >
                    <ChevronLeft size={18} />
                    <span>Previous</span>
                  </button>
                )}
                
                <div className="nav-spacer"></div>
                
                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="nav-button next"
                  >
                    <span>Next</span>
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="nav-button submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending...' : 'Submit Form'}</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
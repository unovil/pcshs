import nullPhoto from '$lib/assets/faculty/null.png';

// person photos (.jpg)
import adona from '$lib/assets/faculty/Adona.jpg';
import almedia from '$lib/assets/faculty/Almeida.jpg';
import alquiza from '$lib/assets/faculty/Alquiza.jpg';
import alverado from '$lib/assets/faculty/Alvarado.jpg';
import balderama from '$lib/assets/faculty/Balderama.jpg';
import barossa from '$lib/assets/faculty/Barossa.jpg';
import cabautan from '$lib/assets/faculty/Cabautan.jpg';
import cadiao from '$lib/assets/faculty/Cadiao.jpg';
import castro from '$lib/assets/faculty/Castro.jpg';
import castro2 from '$lib/assets/faculty/Castro2.jpg';
import cello from '$lib/assets/faculty/Cello.jpg';
import corsiga from '$lib/assets/faculty/Corsiga.jpg';
import corson from '$lib/assets/faculty/Corson.jpg';
import cos from '$lib/assets/faculty/Cos.jpg';
import deLuna from '$lib/assets/faculty/De Luna.jpg';
import deVera from '$lib/assets/faculty/De Vera.jpg';
import delRosario from '$lib/assets/faculty/Del Rosario.jpg';
import deLosReyes from '$lib/assets/faculty/De Los Reyes.jpg';
import didulo from '$lib/assets/faculty/Didulo.jpg';
import domingo from '$lib/assets/faculty/Domingo.jpg';
import edades from '$lib/assets/faculty/Edades.jpg';
import espineda from '$lib/assets/faculty/Espineda.jpg';
import estoce from '$lib/assets/faculty/Estoce.jpg';
import gumunot from '$lib/assets/faculty/Gumunot.jpg';
import jessilva from '$lib/assets/faculty/Jessilva.jpg';
import lara from '$lib/assets/faculty/Lara.jpg';
import loreto from '$lib/assets/faculty/Loreto.jpg';
import martirez from '$lib/assets/faculty/Martirez.jpg';
import mendoza from '$lib/assets/faculty/Mendoza.jpg';
import montemayor from '$lib/assets/faculty/Montemayor.jpg';
import nasayao from '$lib/assets/faculty/Nasayao.jpg';
import navarroMoldogo from '$lib/assets/faculty/Navarro-Moldogo.jpg';
import padsing from '$lib/assets/faculty/Padsing.jpg';
import perez from '$lib/assets/faculty/Perez.jpg';
import quezon from '$lib/assets/faculty/Quezon.jpg';
import quijano from '$lib/assets/faculty/Quijano.jpg';
import quiogue from '$lib/assets/faculty/Quiogue.jpg';
import rafael from '$lib/assets/faculty/Rafael.jpg';
import rafal from '$lib/assets/faculty/Rafal.jpg';
import ricablanca from '$lib/assets/faculty/Ricablanca.jpg';
import risos from '$lib/assets/faculty/Risos.jpg';
import salangsang from '$lib/assets/faculty/Salangsang.jpg';
import saldivar from '$lib/assets/faculty/Saldivar.jpg';
import samarita from '$lib/assets/faculty/Samarita.jpg';
import santos from '$lib/assets/faculty/Santos.jpg';
import secretario from '$lib/assets/faculty/Secretario.jpg';
import simporio from '$lib/assets/faculty/Simporio.jpg';
import tampes from '$lib/assets/faculty/Tampes.jpg';
import tamundong from '$lib/assets/faculty/Tamundong.jpg';
import travero from '$lib/assets/faculty/Travero.jpg';
import ungriano from '$lib/assets/faculty/Ungriano.jpg';
import zerna from '$lib/assets/faculty/Zerna.jpg';

// placeholders (.png)
import engPlaceholder from '$lib/assets/faculty/Eng.png';
import espPlaceholder from '$lib/assets/faculty/Life.png'
import ictPlaceholder from '$lib/assets/faculty/ICT.png';
import lifePlaceholder from '$lib/assets/faculty/Esp.png';
import nonTeachingPlaceholder from '$lib/assets/faculty/non-teaching.png';
import intramurosPlaceholder from '$lib/assets/faculty/intramuros.jpg';
import sciencePlaceholder from '$lib/assets/faculty/laboratory.png';
import mapehPlaceholder from '$lib/assets/faculty/mapeh.png';
import mathPlaceholder from '$lib/assets/faculty/math.png';

export type StaffMember = {
  name: string;
  position: string;
  image?: string;
};

export type DepartmentSection = {
  name: string;
  description: string;
  layout: 'text-left-image-right' | 'image-left-text-right' | 'center-overlay' | 'split-two';
  theme: 'purple-light' | 'blue-dark' | 'gold-overlay' | 'plain-white';
  bannerImage: string;
  members: StaffMember[];
  showSeparator?: boolean;
};

export const placeholderPhoto = nullPhoto;
export const placeholderBanner = nullPhoto;
export const heroImage = nullPhoto;
export const statueImage = lifePlaceholder;

export const scienceMembersTop: StaffMember[] = [
  { name: 'Avel B. Alcalde', position: 'HEAD TEACHER III' },
  { name: 'Mary Ivy A. Castro', position: 'HEAD TEACHER III', image: castro },
  { name: 'Maria Allen B. Secretario', position: 'TEACHER III', image: secretario },
  { name: 'Cheryl S. Bedano', position: 'TEACHER II' },
  { name: 'Francis Arman T. Cos', position: 'TEACHER II', image: cos },
  { name: 'Villa-Michelle P. De Vera', position: 'TEACHER II', image: deVera },
  { name: 'Caren S. Fababaer', position: 'TEACHER II' },
  { name: 'Romeliza S. Perez', position: 'TEACHER II', image: perez },
  { name: 'Cynthia S. Quiogue', position: 'TEACHER II', image: quiogue },
  { name: 'Gloria E. Saldivar', position: 'TEACHER II', image: saldivar },
  { name: 'Roy Vladimir C. Cagalingan', position: 'SPECIAL SCIENCE TEACHER I' },
  { name: 'Charito P. Corsiga', position: 'SPECIAL SCIENCE TEACHER I', image: corsiga },
  { name: 'Filmar R. Domingo', position: 'TEACHER II', image: domingo },
  { name: 'Rechilda P. Encinas', position: 'TEACHER I' },
  { name: 'Geo Gary Joshua R. Firme', position: 'TEACHER I' },
  { name: 'Mark Angelo V. Loreto', position: 'TEACHER I', image: loreto },
  { name: 'Axcel Joy H. Manuba', position: 'TEACHER I' },
  { name: 'Kimberly C. Montemayor', position: 'TEACHER I', image: montemayor },
  { name: 'Samuel Kane l. Quezon', position: 'TEACHER I', image: quezon },
  { name: 'Nico S. Risos', position: 'TEACHER I', image: risos },
  { name: 'Nyca C. Samarita', position: 'TEACHER I', image: samarita }
];

export const mathMembers: StaffMember[] = [
  { name: 'Mark Paul P. Alquiza', position: 'TEACHER III', image: alquiza },
  { name: 'Rose Villa C. Balderama', position: 'TEACHER III', image: balderama },
  { name: 'Carliss S. Salangsang', position: 'TEACHER III', image: salangsang },
  { name: 'Hernan A. Barrosa', position: 'TEACHER II', image: barossa },
  { name: 'Jackie M. Castro', position: 'TEACHER II', image: castro2 },
  { name: 'Joseph S. Lara', position: 'MASTER TEACHER I', image: lara },
  { name: 'Florisa B. Cello', position: 'TEACHER I', image: cello },
  { name: 'Joan R. Cortezano', position: 'TEACHER I' },
  { name: 'Kristine Marie T. Domingo', position: 'TEACHER I', image: domingo },
  { name: 'Ronaldo P. Pineda', position: 'TEACHER I' },
  { name: 'Reynaldo R. Santos', position: 'TEACHER I', image: santos }
];

export const englishMembers: StaffMember[] = [
  { name: 'Maria Jasmin J. Tampes', position: 'TEACHER III', image: tampes },
  { name: 'Airene S. De Luna', position: 'TEACHER II', image: deLuna },
  { name: 'Cherry A. Zerna', position: 'TEACHER II', image: zerna },
  { name: 'Dioscoro E. Estoce Jr.', position: 'SPECIAL SCIENCE TEACHER I', image: estoce },
  { name: 'Michelle V. Oteros', position: 'SPECIAL SCIENCE TEACHER I' },
  { name: 'Christina Sofia DR. Rafallo', position: 'SPECIAL SCIENCE TEACHER I', image: rafal },
  { name: 'Sherry T. Cadiao', position: 'TEACHER I', image: cadiao },
  { name: 'Hannah Krystelle O. Del Rosario', position: 'TEACHER I', image: delRosario },
  { name: 'Larraine Kris N. Moldogo', position: 'TEACHER I', image: navarroMoldogo },
  { name: 'Suzanne Joy M. Pineda', position: 'TEACHER I' },
  { name: 'Trina Rose P. Ricablanca', position: 'TEACHER I', image: ricablanca }
];

export const filipinoMembers: StaffMember[] = [
  { name: 'Vera-Janice V. Tamundong', position: 'TEACHER III', image: tamundong },
  { name: 'Eden P. Concepcion', position: 'TEACHER II' },
  { name: 'Vera Cristina R. Nasayao', position: 'TEACHER II', image: nasayao },
  { name: 'Via D. De Los Reyes', position: 'SPECIAL SCIENCE TEACHER I', image: deLosReyes },
  { name: 'Joanna Marie L. Martirez', position: 'SPECIAL SCIENCE TEACHER I', image: martirez },
  { name: 'Rocelle Marie S. Mendoza', position: 'SPECIAL SCIENCE TEACHER I', image: mendoza },
  { name: 'Laarni M. Cabautan', position: 'TEACHER I', image: cabautan },
  { name: 'Justin F. Flores', position: 'TEACHER I' },
  { name: 'Wendy T. Jessilva', position: 'TEACHER I', image: jessilva }
];

export const espMembers: StaffMember[] = [
  { name: 'Patricia C. Arnedo', position: 'TEACHER III' },
  { name: 'Joel V. Rafal', position: 'TEACHER III', image: rafal },
  { name: 'Queenilyn P. Corzon', position: 'TEACHER I', image: corson }
];

export const apMembers: StaffMember[] = [
  { name: 'Beverly Joy N. Ramos', position: 'TEACHER III' },
  { name: 'Ma. Kathleen S. Adona', position: 'TEACHER II', image: adona },
  { name: 'Maureen D. Alvarado', position: 'TEACHER I', image: alverado },
  { name: 'Lolita D. Espineda', position: 'SPECIAL SCIENCE TEACHER I', image: espineda },
  { name: 'Johnny N. Gumonot', position: 'SPECIAL SCIENCE TEACHER I', image: gumunot },
  { name: 'Billy R. Almeida', position: 'TEACHER I', image: almedia },
  { name: 'Tristan Neil S. Catapang', position: 'TEACHER I' },
  { name: 'Brenda T. Loreno', position: 'TEACHER I' }
];

export const mapehMembers: StaffMember[] = [
  { name: 'Romeo L. Quijano Jr.', position: 'TEACHER III', image: quijano },
  { name: 'Edlyn R. Magsalos', position: 'SPECIAL SCIENCE TEACHER I' },
  { name: 'Jeffrey A. Simporios', position: 'SPECIAL SCIENCE TEACHER I', image: simporio },
  { name: 'Angelo P. Rafael', position: 'SPECIAL SCIENCE TEACHER I', image: rafael },
  { name: 'Ma. Thea Carmela P. Edades', position: 'TEACHER II', image: edades },
  { name: 'Naiden G. Padsing', position: 'TEACHER I', image: padsing }
];

export const creativeTechMembers: StaffMember[] = [
  { name: 'Elizabeth P. Regencia', position: 'TEACHER III' },
  { name: 'Marites O. Ungriano', position: 'TEACHER II', image: ungriano },
  { name: 'Maria Teresa G. Esquierdo', position: 'TEACHER I' }
];

export const nonTeachingMembers: StaffMember[] = [
  { name: 'Leandro C. Ablaza', position: 'ASSISTANT DEPARTMENT HEAD II' },
  { name: 'Grace T. Narag', position: 'ADMINISTRATIVE ASSISTANT II' },
  { name: 'Justian Marie T. Sondia', position: 'REGISTRAR I' },
  { name: 'Jaimie R. Verano', position: 'DRIVER II' },
  { name: 'Maricar E. Oriarte', position: 'ADMINISTRATIVE OFFICER V' },
  { name: 'Grace Efleda T. Dela Cuadra', position: 'ADMINISTRATIVE OFFICER III' },
  { name: 'Jay M. Cos', position: 'ADMINISTRATIVE OFFICER II', image: cos },
  { name: 'Jessica E. Irlandez', position: 'ADMINISTRATIVE ASSISTANT II' },
  { name: 'Krishalice B. Camilon', position: 'ADMINISTRATIVE ASSISTANT II' },
  { name: 'Mike P. Gotis', position: 'ADMINISTRATIVE ASSISTANT II' },
  { name: 'Rufy L. Antang', position: 'CLERK' }
];

export const facultySections: DepartmentSection[] = [
  {
    name: 'SCIENCE DEPARTMENT',
    description:
      'The Science Department is dedicated to developing students curiosity, critical thinking, and problem-solving skills through the study of scientific concepts and real-world applications. It provides a strong foundation in various fields of science such as biology, chemistry, physics, and earth science, allowing students to understand how natural phenomena work and how scientific knowledge can be used to improve everyday life. Through laboratory experiments, investigations, research activities, and technology-based learning, the department encourages students to observe, analyze, and discover. By promoting scientific inquiry and innovation, the Science Department helps prepare learners to become responsible, knowledgeable, and future-ready individuals who can contribute to advancements in science and society.',
    layout: 'text-left-image-right',
    theme: 'purple-light',
    bannerImage: sciencePlaceholder,
    members: scienceMembersTop,
    showSeparator: false
  },
  {
    name: 'MATH DEPARTMENT',
    description:
      'The Mathematics Department focuses on developing students analytical thinking, logical reasoning, and problem-solving skills through the study of mathematical concepts and applications. It provides a strong foundation in areas such as algebra, geometry, trigonometry, statistics, and calculus, helping students understand patterns, relationships, and quantitative reasoning used in real-life situations. Through engaging lessons, collaborative activities, and problem-solving tasks, the department encourages students to think critically and approach challenges systematically. By promoting accuracy, perseverance, and logical thinking, the Mathematics Department prepares students to apply mathematical knowledge in academic pursuits, scientific fields, technology, and everyday decision-making.',
    layout: 'image-left-text-right',
    theme: 'blue-dark',
    bannerImage: mathPlaceholder,
    members: mathMembers,
    showSeparator: true
  },
  {
    name: 'ENGLISH DEPARTMENT',
    description:
      'The English Department is dedicated to developing students communication, critical thinking, and creative expression through the study of language and literature. It helps learners strengthen their skills in reading, writing, speaking, and listening while exploring a wide range of literary works from different cultures and periods. Through discussions, writing activities, presentations, and literary analysis, the department encourages students to express ideas clearly, think critically about texts, and appreciate the power of language in shaping thoughts and society. By fostering strong communication skills and a love for literature, the English Department prepares students to become effective communicators and thoughtful readers in both academic and real-world contexts.',
    layout: 'split-two',
    theme: 'plain-white',
    bannerImage: engPlaceholder,
    members: englishMembers,
    showSeparator: true
  },
  {
    name: 'ESP/VALUES DEPARTMENT',
    description:
      'The ESP/Values Education Department is dedicated to developing students moral character, personal values, and sense of social responsibility. It focuses on guiding learners to make ethical decisions, build positive relationships, and practice respect, empathy, and integrity in their daily lives. Through reflective discussions, real-life situations, and values-centered activities, the department helps students understand the importance of self-discipline, compassion, and accountability. By strengthening students’ character and promoting responsible citizenship, the ESP/Values Education Department aims to shape individuals who contribute positively to their communities and uphold strong moral principles',
    layout: 'text-left-image-right',
    theme: 'purple-light',
    bannerImage: espPlaceholder,
    members: espMembers
  },
  {
    name: 'AP DEPARTMENT',
    description:
      'The Araling Panlipunan (AP) Department focuses on helping students understand society, history, culture, economics, and governance. It aims to develop learners’ awareness of historical events, social issues, and the role of individuals in shaping communities and nations. Through the study of Philippine history, world history, geography, and contemporary social issues, the department encourages critical thinking, responsible citizenship, and appreciation of cultural heritage. By connecting past events to present realities, the Araling Panlipunan Department prepares students to become informed, active, and socially responsible members of society.',
    layout: 'center-overlay',
    theme: 'gold-overlay',
    bannerImage: intramurosPlaceholder,
    members: apMembers
  },
  {
    name: 'MAPEH DEPARTMENT',
    description:
      'The MAPEH Department (Music, Arts, Physical Education, and Health) is dedicated to developing students creativity, physical well-being, and appreciation for the arts and healthy living. It provides opportunities for learners to explore music and visual arts, engage in physical activities and sports, and understand the importance of maintaining a healthy lifestyle. Through performances, creative projects, fitness activities, and health education, the department encourages students to express themselves, build teamwork and discipline, and practice habits that promote overall wellness. By integrating artistic expression, physical fitness, and health awareness, the MAPEH Department helps students develop balanced and well-rounded skills for everyday life.',
    layout: 'image-left-text-right',
    theme: 'blue-dark',
    bannerImage: mapehPlaceholder,
    members: mapehMembers
  },
  {
    name: 'CREATIVE TECH DEPARTMENT',
    description:
      'The Creative Technology Department focuses on developing students skills in digital innovation, media creation, and technology-based problem solving. It introduces learners to various tools and platforms used in areas such as digital design, multimedia production, programming, and emerging technologies. Through hands-on projects, collaborative activities, and creative exploration, students learn how to transform ideas into digital outputs while applying critical thinking and technical skills. By combining creativity with technology, the Creative Technology Department prepares students to adapt to the rapidly evolving digital world and equips them with skills relevant to modern industries and future careers.',
    layout: 'text-left-image-right',
    theme: 'purple-light',
    bannerImage: ictPlaceholder,
    members: creativeTechMembers
  }
];
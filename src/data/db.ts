import { User } from "../types";
import { Classes } from "../types/classesTypes";

export const user: User[] = [
  {
    id: 1,
    name: "Jordi Garcia Ferre",
    residence: "Argentina",
    email: "jordi@gmail.com",
    password: "JordiGarcia1",
    age: 20,
    weight: 80,
    height: 180,
    activity: "Activo",
    image:
      "https://s3-alpha-sig.figma.com/img/f34f/65b4/b3c50915a47f15a0bd202d640e90bc46?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n43l8YUanl7MjsXWhEaBoBoCEXfsKd~K-xXlXiv3tGlgzemO-CVLaGxSEESZ0c3PtUWjru02lfnLmrcvKZCx7DIYAd4zSXBw~kTU5lUSixLk8qefvqzaORveTdkeOLAlhaOnWYiC7XrXvcL2dKBMuUMp0Vka~yGdXDgN0VqMtogsEfz3h48qvc4j2DFPHOTEsQI~ksITL9GL-PFd8Z-sXxogmYu5rz~gacjgZS~yAcZaR2VIt0aIWJcWHm8n3mBdA7Avs4whXiF8HyeDlxFjN13lf4~NmNh7ruKqOgnAc8gDyuIA-8DMigZq0uanMaOCf1xN6I5AgrOHKFuyL8EPdw__",
    kcal: 0,
    new_password: "",
    current_password: "",
    auth: false,
  },
  {
    id: 2,
    name: "Gabriel Girotti",
    residence: "Argentina",
    email: "gabriel@gmail.com",
    password: "GabrielGirotti1",
    age: 30,
    weight: 90,
    height: 18,
    activity: "Inactivo",
    image:
      "data:image/jpeg;base64,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",
    kcal: 0,
    new_password: "",
    current_password: "",
    auth: true,
  },
];


export const DBclasses: Classes[] = [
  {
    id: 1,
    title: "Funcional",
    description: "Clase de una hora en la que trabajarás todo tu cuerpo",
    image: "https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__",
    instructor: {
      id: 1,
      user_id: 1,
      name: "John Doe",
      bio: "Entrenador Funcional Certificado con 5 años de experiencia.",
      professional_title: "Entrenador Funcional Certificado",
      years_experience: "5 años",
      class_type: "Entrenamiento Funcional"
    },
    level: "Fuerte",
    type: "En gimnasio",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    hour: "11 a.m",
    kcal: 500,
  },
  {
    id: 2,
    title: "Yoga",
    description: "Una clase relajante centrada en la flexibilidad y la relajación",
    image: "https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__",
    instructor: {
      id: 2,
      user_id: 2,
      name: "Jane Smith",
      bio: "Instructor de yoga experimentado especializado en yoga Hatha y Vinyasa.",
      professional_title: "Instructor de Yoga",
      years_experience: "8 años",
      class_type: "Yoga"
    },
    level: "Suave",
    type: "Virtual",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 840,
    hour: "11 a.m"
  },
  {
    id: 3,
    title: "Pilates",
    description: "Fortalece tu núcleo con nuestras clases de pilates",
    image: "https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__",
    instructor: {
      id: 3,
      user_id: 3,
      name: "Michael Brown",
      bio: "Instructor de pilates apasionado por mejorar la postura y la flexibilidad.",
      professional_title: "Instructor de Pilates",
      years_experience: "6 años",
      class_type: "Pilates"
    },
    level: "Fuerte",
    type: "En gimnasio",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 50,
    hour: "11 a.m"
  },
  {
    id: 4,
    title: "Spinning",
    description: "Entrenamiento intensivo de ciclismo",
    image: "https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__",
    instructor: {
      id: 4,
      user_id: 4,
      name: "Emily Johnson",
      bio: "Instructor certificado de Spinning apasionado por el fitness y el entrenamiento de resistencia.",
      professional_title: "Instructor de Spinning Certificado",
      years_experience: "4 años",
      class_type: "Spinning"
    },
    level: "Fuerte",
    type: "En gimnasio",
    status: "No disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 200,
    hour: "11 a.m"
  },
  {
    id: 6,
    title: "CrossFit",
    description: "Entrenamiento de alta intensidad que combina diferentes disciplinas",
    image: "https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__",
    instructor: {
      id: 5,
      user_id: 5,
      name: "Alexandra García",
      bio: "Entrenadora experta en CrossFit con enfoque en resistencia y fuerza.",
      professional_title: "Entrenadora de CrossFit",
      years_experience: "7 años",
      class_type: "CrossFit"
    },
    level: "Fuerte",
    type: "En gimnasio",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 100,
    hour: "11 a.m"
  },
  {
    id: 7,
    title: "Clase de Baile",
    description: "Disfruta aprendiendo diversos estilos de baile en una clase dinámica",
    image: "https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__",
    instructor: {
      id: 6,
      user_id: 6,
      name: "Carlos Martínez",
      bio: "Bailarín profesional con experiencia en salsa, bachata y hip-hop.",
      professional_title: "Instructor de Baile",
      years_experience: "10 años",
      class_type: "Baile"
    },
    level: "Suave",
    type: "En gimnasio",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 530,
    hour: "11 a.m"
  },
  {
    id: 8,
    title: "Entrenamiento Cardiovascular",
    description: "Mejora tu resistencia y salud cardiovascular con este entrenamiento",
    image: "https://s3-alpha-sig.figma.com/img/21c4/a63c/15f4fba5fb794a1cf265f1ab3a037861?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bi3WY-j1BRJ9-mKGuZmplrK7QwN~uoz5AQmwxBOUMXSqS4mvzm2mOxsbuDLXVYV3eMqSbPH0UfD1M5vDnJ-Vn2ahtByRZIj~MRVzU0IOVH5g3vh7lryfKD8izsgka~pJaBk9qBRZ7ONDoRRC2Bi58rTyYHqD5cjBMPw3b0er7gUh7HqY2UU7F1oTkvMAxwxFOYFxD36-FZau1CrHq1QmjGpGOZ0g2ovcGIdusptJZr0tlO2zIlrYtzCqKauan2RLw9yClmW3IUL3Up8QHANucywtXsJ7BjQPM7zxcF51Q4NXgVH0D8UR2krwB8wGECK8bIHZdwBbO~eKCJicDWmruQ__",
    instructor: {
      id: 7,
      user_id: 7,
      name: "Laura Pérez",
      bio: "Entrenadora certificada en cardio con enfoque en salud y bienestar.",
      professional_title: "Entrenadora de Cardio",
      years_experience: "8 años",
      class_type: "Entrenamiento Cardiovascular"
    },
    level: "Fuerte",
    type: "En gimnasio",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 500,
    hour: "11 a.m"
  },
  {
    id: 9,
    title: "Boxeo",
    description: "Aprende las técnicas básicas y avanzadas del boxeo con nuestros entrenadores",
    image: "https://s3-alpha-sig.figma.com/img/4df6/e3f9/75a103d603890caf6eb51c89dac633a6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb9yyb5yIGAvCzwlLuPhk77k3B8G35cZbs8kSrMmMIdHNRba7oI2BjxpCCFKnBdWWLgXG-z0~EYb4ACrTM~f-yE637L-GZEq4tJaAldQsNT-Hg9ZiwtnM153JYxAVK9Qjwma4Rp3aE9v1ZIHgWiB4z~nmD6aVgySnZ5b5ubP19QtwdpVrNr-qvsCdVvXLX73Zw4RMNkDRs9mZgfL12ofrloiG61b58m1JMG6RWPErrZyZjm6mKOmiIxJnB4Q55~OZc4WLwSsasx4z9aI-6qg-tMDKVgZtYCjTVP-Hcm5OAorp74lshNFtEjsvaCapp5aX6UMjNkK92OE7CvsmUoouA__",
    instructor: {
      id: 8,
      user_id: 8,
      name: "Roberto González",
      bio: "Entrenador de boxeo con experiencia en competiciones profesionales y entrenamiento personalizado.",
      professional_title: "Entrenador de Boxeo",
      years_experience: "12 años",
      class_type: "Boxeo"
    },
    level: "Fuerte",
    type: "En gimnasio",
    status: "Disponible",
    length: "35 min",
    calories: "840 Kcal",
    kcal: 40,
    hour: "11 a.m"
  }
];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userRedux = {
  id: number;
  name: string;
  residence: string;
  email: string;
  password: string;
  age: number;
  weight: number;
  height: number;
  activity: string;
  image: string;
  kcal: number;
  auth: boolean;
};

type userState = {
  userRedux: userRedux[];
};

const initialState: userState = {
  userRedux: [
    {
      id: 1,
      name: "Probando Redux",
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
        "https://instagram.fvlc8-1.fna.fbcdn.net/v/t51.2885-19/179079507_2947145672222725_5916221699464345540_n.jpg?_nc_ht=instagram.fvlc8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=4A85TiXucv0Q7kNvgFBtTSr&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYAQ2yQOYs-5yJ2cAEHpiVEUmx5ZcSDqkQayJvuk1DQvbA&oe=66932D7F&_nc_sid=bef7bc",
      kcal: 0,
      auth: true,
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      console.log(state.userRedux, action.payload.email)
    },
  },
});

export const { authUser } = userSlice.actions;
export default userSlice.reducer;

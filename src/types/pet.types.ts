// AddPetForm sayfasındaki alanlar (title, name, birthday, species, sex, imgUrl) için uygun veri tipleri

export interface Pet {
  _id: string;
  title: string;
  name: string;
  birthday: string; // YYYY-MM-DD
  species: string;
  sex: "male" | "female" | "multiple";
  imgUrl: string;
}

export interface AddPetPayload {
  title: string;
  name: string;
  birthday: string;
  species: string;
  sex: string;
  imgUrl: string;
}

// AddPetForm sayfasındaki alanlar (title, name, birthday, species, sex, imgURL) için uygun veri tipleri

export interface PetType {
  _id: string;
  title: string;
  imgURL: string;
  name: string;
  birthday: string | null;
  sex: string;
  species: string;
}

export interface AddPetPayload {
  title: string;
  name: string;
  birthday: string;
  species: string;
  sex: string;
  imgURL: string;
}

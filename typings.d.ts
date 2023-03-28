interface Message {
  text: string;
  createdAt: admin.Firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

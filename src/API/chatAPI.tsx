import { $authHost } from "./index";

type IChatData = {
  productName: string;
  productPrice: number;
  userID: string;
};

export const sendChatData = async (chatData: IChatData): Promise<unknown> => {
  try {
    const { data } = await $authHost.post(
      "api/chat/create",
      JSON.stringify(chatData)
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

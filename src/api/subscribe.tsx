export const submit = async (
  name: string,
  email: string,
  setIsLoading: any,
  setShowNotif: any,
  setShowNotifMsg: any
) => {
  setIsLoading(true);
  let response = await fetch(
    `${process.env.REACT_APP_LOCAL_API_URL}/subscribe`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name, email }),
    }
  );
  let data = await response.json();
  setIsLoading(false);
  if (response.status == 201) {
    setShowNotifMsg(`Dear ${data.name}, thank you for subscription .`);
    setShowNotif(true);
  } else if (response.status == 202) {
    setShowNotifMsg(
      `Dear ${data.name},oh it seems that you already subscribe to our newsletter,  thank you again for subscription .`
    );
    setShowNotif(true);
  }
};

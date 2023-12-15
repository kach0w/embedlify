import { ImageResponse } from '@vercel/og';
export const config = {
  runtime: 'edge',
};
 
export default async function handler(request, res) {
  const { searchParams } = request.nextUrl;
  const today = new Date();
  const date = today.getDate()
  const month = today.getMonth() + 1;
  let holiday = searchParams.get('holiday');
  let img, msg
  if (!holiday) {
    if(date == 25 && month == 12){holiday = "christmas"}
    else if(date == 28 && month == 11){holiday = "thanksgiving"}
    else if(date == 1 && month == 1){holiday = "new_years"}
    else if(date == 27 && month == 5){holiday = "memorial"}
    else if(date == 4 && month == 7){holiday = "independence"}
    else if(date == 2 && month == 9){holiday = "labor"}
    else if(date == 31 && month == 10){holiday = "halloween"}
    else if(date == 14 && month == 2){holiday = "valentines"}
    else{return;}
  }
  
  if(holiday.toLowerCase() === "christmas"){
    img = "🎄"
    msg = "Merry Christmas!"
  } else if(holiday.toLowerCase() === "thanksgiving"){
    img = "🦃"
    msg = "Happy Thanksgiving!"
  } else if(holiday.toLowerCase() === "new_years"){
    img = "🍾"
    msg = "Happy New Year!!"
  }
  else if(holiday.toLowerCase() === "memorial"){
    img = "🎖️"
    msg = "Happy Memorial Day!"
  } else if(holiday.toLowerCase() === "independence"){
    img = '\uD83C\uDDFA\uD83C\uDDF8'
    msg = "Happy 4th of July!"
  } else if(holiday.toLowerCase() === "labor"){
    img = "🧑‍🏭"
    msg = "Happy Labor Day!"
  } else if(holiday.toLowerCase() === "halloween"){
    img = "🎃"
    msg = "Happy Halloween!"
  } else if(holiday.toLowerCase() === "valentines"){
    img = "💘"
    msg = "Happy Valentines Day!"
  }

  return new ImageResponse(
    <div tw="flex w-[250px] h-[50px] items-center justify-center bg-white rounded-lg">
      <div tw="flex inset-y-0 absolute left-0 w-[9px] h-[50px] bg-[#C02C38] rounded-l-lg">
      </div>
      <div tw="flex text-[40px] p-2">
        {img}
      </div>
      <div tw="flex font-bold">
        <a tw="flex">{msg}</a>
      </div>
    </div>
  ), {
    width: 250,
    height: 50,
  },
}
export const validate = (values) => {
  const errors = {};

  if(!values.accountId){
    errors.accountId = 'アカウントIDを入力してください。'
  }else if(values.accountId.length > 254){
    errors.id = 'アカウントIDは254文字以内で入力してください。'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.accountId)){
    errors.accountId = 'アカウントIDはメールアドレス形式で入力してください。'
  }

  if(!values.mailAddress){
    errors.mailAddress = 'メールアドレスを入力してください。'
  }else if(values.mailAddress.length > 254){
    errors.mailAddress = 'メールアドレスは254文字以内で入力してください。'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mailAddress)){
    errors.mailAddress = 'メールアドレス形式で入力してください。'
  }

  if(!values.password) errors.password = 'パスワードを入力してください。'

  if(!values.confirm_password){
    errors.confirm_password = 'パスワード(確認用)を入力してください。'
  }else if(values.password !== values.confirm_password){
    errors.confirm_password = '新しいパスワードと新しいパスワード(確認用)が異なっています。'
  }

  if(!values.text){
    errors.text = 'キーワードを入力してください。'
  }

  // if(values.startEra && values.startEra !== "---"){
  //   if(!values.startDateYear)errors.startDateYear = '年を入力してください。'
  //   if(!values.startDateMonth)errors.startDateMonth = '月を入力してください。'
  //   if(!values.startDateDay)errors.startDateDay = '日を入力してください。'
  // }
  //
  // if(values.endEra && values.endEra !== "---"){
  //   if(!values.endDateYear)errors.endDateYear = '年を入力してください。'
  //   if(!values.endDateMonth)errors.endDateMonth = '月を入力してください。'
  //   if(!values.endDateDay)errors.endDateDay = '日を入力してください。'
  // }

  if(values.startDateYear || values.startDateMonth || values.startDateDay){
    if(!values.startEra || values.startEra === "---")errors.startEra = '西暦か年号を入力してください。'
  }

  if(values.endDateYear || values.endDateMonth || values.endDateDay){
    if(!values.endEra || values.endEra === "---")errors.endEra = '西暦か年号を入力してください。'
  }

  if(values.date_y || values.date_m || values.date_d){
    if(!values.era || values.era === "---")errors.era = '西暦か年号を入力してください。'
  }

  // if(values.startEra==='西暦'){
  //   if(!/^[0-9]{4}$/i.test(Number(values.startDateYear))){
  //     errors.startDateYear = '正しい年を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.startDateMonth))){
  //     errors.startDateMonth = '正しい月を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.startDateDay))){
  //     errors.startDateDay = '正しい日を入力してください。'
  //   }
  // }else if(values.startEra === '明治' || values.startEra === '大正' ||values.startEra === "昭和" || values.startEra === '平成' ){
  //   if(!/^\d{1,2}$/i.test(Number(values.startDateYear))){
  //     errors.startDateYear = '正しい年を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.startDateMonth))){
  //     errors.startDateMonth = '正しい月を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.startDateDay))){
  //     errors.startDateDay = '正しい日を入力してください。'
  //   }
  // }
  //
  // if(values.endEra==='西暦'){
  //   if(!/^\d{4}$/i.test(Number(values.endDateYear))){
  //     errors.endDateYear = '正しい年を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.endDateMonth))){
  //     errors.endDateMonth = '正しい月を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.endDateDay))){
  //     errors.endDateDay = '正しい日を入力してください。'
  //   }
  // }else if(values.endEra === '明治' || values.endEra === '大正' ||values.endEra === '昭和' || values.endEra === '平成' ){
  //   if(!/^\d{1,2}$/i.test(Number(values.endDateYear))){
  //     errors.endDateYear = '正しい年を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.endDateMonth))){
  //     errors.endDateMonth = '正しい月を入力してください。'
  //   }
  //   if(!/^\d{1,2}$/i.test(Number(values.endDateDay))){
  //     errors.endDateDay = '正しい日を入力してください。'
  //   }
  // }

  if(!values.file)errors.file = 'ファイルを選択してください。'

  return errors
}

const getAge = () => {
    return 37
  }
  
  const getName = () => {
    return 'Flavio'
  }

  const getDetails = () => {
    return [37, 'Flavio']
  }

  const [age, name] = getDetails()

  const ggetDetails = () => {
    return { 
      age: 37, 
      name: 'Flavio'
    }
  }
  
  const { aage, nname } = getDetails()
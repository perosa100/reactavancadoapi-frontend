const GET_LANDING_PAGE = /* GraphQl */ `
  fragment logo on LandingPage{
   logo{
      alternativeText
      url
    }
}

fragment header on LandingPage{
   header{
    title
        description
        button{
          label
          url
        }
     image{
          alternativeText
          url
        }
  }
}

fragment sectionAboutProjetc on LandingPage{
  sectionAboutProject{
    title
    description
    image{
      alternativeText
      url

    }
  }
}

fragment sectionTech on LandingPage{
  sectionTech{
    title
    techIcons{
      title
      icon{
        url
      }
    }
  }
}

fragment sectionConcepts on LandingPage{
  sectionConcepts{
    title
   concepts{
    title
  }
  }
}

fragment sectionModules on LandingPage{
  sectionModules{
  title
    modules{
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage{
  sectionAgenda{
  title
    description
  }
}

fragment pricingBox on LandingPage{
  pricingBox{
    totalPrice
    numberInstallments
    priceInstallment
    benefits
    button{
    label
    url
    }
  }
}

fragment sectionAboutUs on LandingPage{
  sectionAboutUs{
  title
    authors{
      photo{
        alternativeText
        url
      }
      name
      role
      socialLinks{
        title
        url
      }
      description
    }
  }
}

fragment sectionReviews on LandingPage{
  sectionReviews{
 title
    reviews{
      name
      text
      photo{
        name
        url
        alternativeText
      }
    }
  }
}

fragment sectionFaq on LandingPage{
  sectionFaq{
 title
   questions{
    question
    answer
  }
  }
}

query GET_LADING_PAGE{
	landingPage{
   ...logo
    ...header
    ...sectionAboutProjetc
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...sectionAgenda
    ...pricingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFaq
  }
}
`

export default GET_LANDING_PAGE

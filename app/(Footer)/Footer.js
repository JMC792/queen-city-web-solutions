import { Fragment } from "react"

// Icons
import call from "public/icons/call2.svg"
import email from "public/icons/email.svg"
import image1 from "public/icons/crown.svg"
import location from "public/icons/location_on_white.svg"
import language from "dictionaries/en.json"

// Components
import Overview from "./Overview"
import Internal from "./Internal"
import Outgoing from "./Outgoing"
import Trademark from "./Trademark"
import Contact from "./Contact"

export default function Footer() {

  return (
    <Fragment>
      <footer className="bg-neutral-800">
        {/* Footer Container */}
        <div className="container text-white">
          {/* Footer padding and Margin */}
          <div className="py-20">
            {/* Footer Layout*/}
            <div className="grid gap-y-20 lg:flex lg:justify-between items-start">
              <Overview
                title = {language.footer.overview.title}
                description = {language.footer.overview.paragraph}
                image = {image1}
              />
              <Internal
                links={[
                  language.navbar.link1,
                  language.navbar.link2,
                  language.navbar.link3,
                  language.navbar.link4,
                  language.navbar.link5,
                ]}/>
              <Outgoing 
                title= {language.footer.socialMedia.title}
                links={[
                  [language.footer.socialMedia.media1.title, language.footer.socialMedia.media1.link],
                  [language.footer.socialMedia.media2.title, language.footer.socialMedia.media2.link],
                  [language.footer.socialMedia.media3.title, language.footer.socialMedia.media3.link],
                  [language.footer.socialMedia.media4.title, language.footer.socialMedia.media4.link],
                  [language.footer.socialMedia.media5.title, language.footer.socialMedia.media5.link]
              ]}/>
              <Contact 
                title= {language.footer.legal.title}
                links={[
                  [language.footer.legal.link1.title, language.footer.legal.link1.link, call, "call"],
                  [language.footer.legal.link2.title, language.footer.legal.link2.link, email, "email"],
                ]}
              />
            </div>
          </div>

          {/*----------------------- Dividing Line ----------------------- */}
          <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/*----------------------- Trademark ----------------------- */}
          <Trademark
            year = {language.footer.trademark.year}
            company = {language.footer.trademark.company}
            rights = {language.footer.trademark.rights}
          />
        </div>
      </footer>
    </Fragment>
  );
}

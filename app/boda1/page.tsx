"use client"

import { useState, useEffect } from "react"

import { motion } from "framer-motion"
import { Heart, MapPin, Utensils, Music, Gift, Plane, Building2,Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { WeddingGallery } from "@/components/wedding-gallery"


export default function WeddingPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [activeSection, setActiveSection] = useState("hero")

  // Countdown timer for wedding date (example: June 15, 2025)
  useEffect(() => {
    //defining weddin date
    const weddingDate = new Date("2026-06-15T16:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#FBF8F3]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FBF8F3]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-16 gap-8">
            {["Nuestra Historia", "Programación", "Viaje", "Registro", "RSVP"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className="text-sm font-medium text-[#4A5D4A] hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A5D4A]/10 to-transparent" />
       
        
        <Image
        
        src="/couple2.jpg"

         width={'2400'}
         height={'2400'}
         
          alt="Wedding couple"
          className="absolute inset-0 w-full h-full object-cover"
          
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="font-serif text-7xl md:text-8xl mb-4 tracking-wide">Emily & James</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">June 15, 2025</p>

          {/* Countdown Timer */}
          <div className="flex gap-6 justify-center">
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-serif font-bold">{item.value}</div>
                <div className="text-sm uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-5xl text-center text-[#4A5D4A] mb-16">Nuestra Historia</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-4 text-[#4A5D4A] leading-relaxed">
                <p>
                  Our journey began on a crisp autumn evening in 2019, when fate brought us together at a mutual
                  friend's dinner party. What started as a conversation about our shared love of travel and photography
                  quickly blossomed into something magical.
                </p>
                <p>
                  Over the years, we've explored countless cities, hiked through mountain trails, and built a life
                  filled with laughter, adventure, and unconditional love. Through every challenge and celebration,
                  we've grown stronger together.
                </p>
                <p>
                  Now, we're thrilled to begin our greatest adventure yet—marriage. We can't wait to celebrate this
                  special day with all of you, the people who have made our journey so meaningful.
                </p>
              </div>

              {/* Photo Masonry Gallery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/couple2.jpg"
                    width={'200'}
                    height={'200'}
                    alt="Couple photo 1"
                    className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                  />
                  <Image
                    src="/couple3.jpg"
                    alt="Couple photo 2"
                    height={'200'}
                    width={'200'}
                    className="w-full h-[150px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <Image
                  height={'200'}
                  width={'200'}
                    src="/couple4.jpg"
                    alt="Couple photo 3"
                    className="w-full h-[150px] object-cover rounded-lg shadow-lg"
                  />
                  <Image
                  height={'200'}
                  width={'200'}
                    src="/couple5.jpg"
                    alt="Couple photo 4"
                    className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl text-center text-[#4A5D4A] mb-16">Programacion de actividades</h2>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  time: "4:00 PM",
                  title: "Ceremonia",
                  icon: Heart,
                  description: "Join us as we exchange our vows in an intimate garden setting",
                },
                {
                  time: "5:00 PM",
                  title: "Hora de Cocktail",
                  icon: Utensils,
                  description: "Enjoy refreshments and hors d'oeuvres on the terrace",
                },
                {
                  time: "6:30 PM",
                  title: "Cena",
                  icon: Utensils,
                  description: "A delicious three-course meal prepared by our talented chef",
                },
                {
                  time: "8:00 PM",
                  title: "Baile",
                  icon: Music,
                  description: "Let's dance the night away under the stars",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-12 border-l-2 border-[#D4AF37] last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    <event.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-6">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-[#D4AF37] font-semibold">{event.time}</span>
                      <h3 className="font-serif text-2xl text-[#4A5D4A]">{event.title}</h3>
                    </div>
                    <p className="text-[#4A5D4A]/70">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel & Accommodations Section */}
      <section id="travel" className="py-24 bg-[#FBF8F3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl text-center text-[#4A5D4A] mb-4">Travel & Accommodations</h2>
            <p className="text-center text-[#4A5D4A]/70 mb-16">We've reserved room blocks at these nearby hotels</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "The Grand Estate Hotel",
                  price: "$189",
                  distance: "0.5 miles from venue",
                  amenities: "Complimentary breakfast included",
                },
                {
                  name: "Garden View Inn",
                  price: "$149",
                  distance: "1.2 miles from venue",
                  amenities: "Shuttle service to venue",
                },
                {
                  name: "Riverside Boutique Hotel",
                  price: "$169",
                  distance: "0.8 miles from venue",
                  amenities: "Spa and pool access",
                },
              ].map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-[#D4AF37]/20 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Building2 className="w-8 h-8 text-[#D4AF37]" />
                        <span className="text-2xl font-serif font-bold text-[#D4AF37]">{hotel.price}</span>
                      </div>
                      <CardTitle className="text-xl text-[#4A5D4A]">{hotel.name}</CardTitle>
                      <CardDescription className="text-[#4A5D4A]/70">per night</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-[#4A5D4A]/70">
                          <MapPin className="w-4 h-4" />
                          <span>{hotel.distance}</span>
                        </div>
                        <p className="text-sm text-[#4A5D4A]/70">{hotel.amenities}</p>
                        <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white">Book Room</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section id="registry" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl text-center text-[#4A5D4A] mb-4">Gift Registry</h2>
            <p className="text-center text-[#4A5D4A]/70 mb-16">
              Your presence is the greatest gift, but if you wish to honor us with a gift, here are a few options
            </p>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Honeymoon Fund", icon: Plane, description: "Help us create memories in Santorini" },
                { title: "Home Essentials", icon: Gift, description: "Kitchen & dining registry" },
                { title: "Experience Fund", icon: Heart, description: "Adventures & date nights" },
                { title: "Custom Gift", icon: Gift, description: "Surprise us with your thoughtfulness" },
              ].map((registry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-lg transition-all cursor-pointer group">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4A5D4A]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                        <registry.icon className="w-8 h-8 text-[#4A5D4A] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-serif text-xl text-[#4A5D4A] mb-2">{registry.title}</h3>
                      <p className="text-sm text-[#4A5D4A]/70">{registry.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 bg-[#FBF8F3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl text-center text-[#4A5D4A] mb-4">RSVP</h2>
            <p className="text-center text-[#4A5D4A]/70 mb-16">Please respond by April 15, 2025</p>

            <Card className="max-w-2xl mx-auto border-[#D4AF37]/20 shadow-xl">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#4A5D4A] pb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="border-[#4A5D4A]/20 focus:border-[#D4AF37]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="attendance" className="text-[#4A5D4A] pb-2">
                      Will you be attending? *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-[#4A5D4A]/20 focus:border-[#D4AF37]">
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="attending">Joyfully Accepting</SelectItem>
                        <SelectItem value="declining">Regretfully Declining</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="meal" className="text-[#4A5D4A] pb-2">
                      Meal Preference
                    </Label>
                    <Select>
                      <SelectTrigger className="border-[#4A5D4A]/20 focus:border-[#D4AF37]">
                        <SelectValue placeholder="Choose your entrée" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beef">Herb-Crusted Beef Tenderloin</SelectItem>
                        <SelectItem value="chicken">Pan-Seared Chicken Breast</SelectItem>
                        <SelectItem value="fish">Grilled Atlantic Salmon</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian Risotto</SelectItem>
                        <SelectItem value="vegan">Vegan Option</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="songs" className="text-[#4A5D4A] pb-2">
                      Song Requests or Dietary Restrictions
                    </Label>
                    <Textarea
                      id="songs"
                      placeholder="Any special songs you'd like to hear or dietary needs we should know about?"
                      className="border-[#4A5D4A]/20 focus:border-[#D4AF37] min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-6 text-lg">
                    Submit RSVP
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


            
      {/* Photo Gallery Section */}
      <section id="gallery" className="py-24 bg-[#FBF8F3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="font-serif text-5xl text-center text-[#4A5D4A]">Our Memories</h2>
            </div>
            <p className="text-center text-[#4A5D4A]/70 mb-16">A glimpse into our journey together</p>

            <WeddingGallery />
          </motion.div>
        </div>
      </section>




            


      {/* Footer */}
      <footer className="py-12 bg-[#4A5D4A] text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-[#D4AF37]" />
          <h3 className="font-serif text-2xl mb-2">Gracias</h3>
          <p className="text-white/80 mb-4">No podemos celebrar sin ti!</p>
          <p className="text-[#D4AF37] font-semibold">#FinallyTheSmiths</p>
        </div>
      </footer>
    </div>
  )
}

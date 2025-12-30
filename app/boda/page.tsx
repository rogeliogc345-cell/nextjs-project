import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Heart, Users } from "lucide-react"

export default function bodasPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-sage/20 rounded-full" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-sage/20 rounded-full" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sage/30 bg-white/50 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-sage" />
            <span className="text-sm text-charcoal tracking-wide">Elegant Digital Invitations</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-tight text-balance">
            Celebrate your
            <br />
            special moment
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Create beautiful digital wedding invitations that your guests will cherish. Manage RSVPs effortlessly with
            our elegant platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="bg-charcoal hover:bg-charcoal/90 text-cream px-8 h-14 text-lg">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-charcoal text-charcoal hover:bg-charcoal/5 px-8 h-14 text-lg bg-transparent"
            >
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal text-balance">
              Everything you need for your wedding
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto text-pretty">
              Streamline your wedding planning with our comprehensive digital invitation suite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 bg-cream border-sage/20 hover:border-sage/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-3">Event Details</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Share all the important information about your special day in one elegant digital invitation.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 bg-cream border-sage/20 hover:border-sage/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-3">RSVP Management</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Track guest responses in real-time and manage your guest list with ease.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 bg-cream border-sage/20 hover:border-sage/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-3">Venue Details</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Include maps, directions, and accommodation information for your guests.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-cream" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/10 mb-4">
            <Heart className="w-10 h-10 text-sage fill-sage" />
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-charcoal text-balance">
            Ready to create your invitation?
          </h2>

          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Join hundreds of couples who have made their wedding planning easier with our beautiful digital invitations.
          </p>

          <div className="pt-6">
            <Button size="lg" className="bg-charcoal hover:bg-charcoal/90 text-cream px-12 h-16 text-xl">
              Create Your Invitation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-sage/20 bg-white/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-charcoal/60 text-sm">Making wedding planning more elegant, one invitation at a time</p>
        </div>
      </footer>
    </div>
  )
}

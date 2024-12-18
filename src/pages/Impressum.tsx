import { Card, CardContent } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#180602', fontFamily: "'M PLUS 1', sans-serif" }}>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg" style={{ backgroundColor: '#180602', color: '#FFFFFF' }}>
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold mb-8" style={{ color: '#E9350C' }}>Impressum</h1>
            
            <section className="mb-8">
              <p className="text-lg">Lena Sophia Voß</p>
              <p className="text-lg">Steinickeweg 7</p>
              <p className="text-lg">80798 München</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#E9350C' }}>Kontakt</h2>
              <p className="text-lg">info@lumeraenergy.de</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#E9350C' }}>Rechtliche Hinweise</h2>
              <p className="leading-relaxed">
                Lumera Energy übernimmt weder Garantie noch Haftung für die Richtigkeit, 
                Vollständigkeit und Aktualität der Angaben. In keinem Fall wird für Schäden, 
                die sich aus der Verwendung der abgerufenen Informationen ergeben, eine 
                Haftung übernommen.
              </p>
              <p className="leading-relaxed">
                Sämtliche Inhalte auf der Lumera Energy Website unterliegen dem Schutz 
                des Urheberrechts und anderen Schutzgesetzen und dürfen nicht zu 
                kommerziellen Zwecken verändert, kopiert, verbreitet oder Dritten 
                zugänglich gemacht werden.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Impressum;
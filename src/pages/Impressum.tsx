import { Card, CardContent } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold mb-8">Impressum</h1>
            
            <section className="mb-8">
              <p className="text-lg">Lena Sophia Voß</p>
              <p className="text-lg">Steinickeweg 7</p>
              <p className="text-lg">80798 München</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <p className="text-lg">info@lumeraenergy.de</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Rechtliche Hinweise</h2>
              <p className="text-gray-700 leading-relaxed">
                Lumera Energy übernimmt weder Garantie noch Haftung für die Richtigkeit, 
                Vollständigkeit und Aktualität der Angaben. In keinem Fall wird für Schäden, 
                die sich aus der Verwendung der abgerufenen Informationen ergeben, eine 
                Haftung übernommen.
              </p>
              <p className="text-gray-700 leading-relaxed">
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
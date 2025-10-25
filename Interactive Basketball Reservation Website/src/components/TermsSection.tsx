import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { AlertTriangle, Info, DollarSign, Clock, Zap, Coffee } from 'lucide-react';

export function TermsSection() {
  const policies = [
    {
      title: "First to pay gets the slot.",
      description: "Reservations are only confirmed after payment. Until payment is made, the slot remains available to other customers.",
      icon: <DollarSign className="w-5 h-5" />,
      type: "info" as const
    },
    {
      title: "Downpayment is required to confirm a reservation.",
      description: "A 50% downpayment is required to secure your booking. The remaining balance can be paid before your scheduled time.",
      icon: <DollarSign className="w-5 h-5" />,
      type: "info" as const
    },
    {
      title: "Strictly no refund of downpayment once cancelled.",
      description: "Downpayments are non-refundable. Please be certain of your schedule before making a reservation.",
      icon: <AlertTriangle className="w-5 h-5" />,
      type: "warning" as const
    },
    {
      title: "No rescheduling allowed.",
      description: "Once a slot is booked, it cannot be rescheduled. If you can't make your reserved time, you'll need to book a new slot.",
      icon: <Clock className="w-5 h-5" />,
      type: "warning" as const
    }
  ];

  const courtRules = [
    "Use court at your own risk.",
    "The basketball court is for renters and their guests only.",
    "Limit play to your reserved slot for there are still others waiting.",
    "Do not hang on the rim.",
    "No smoking, no chewing gum, glass or alcoholic beverages.",
    "No skateboard, roller blades, or bikes allowed.",
    "WallStreet Sport is not responsible for any personal belongings left unattended."
  ];

  return (
    <section id="terms" className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2210%22%20height%3D%2210%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2010%200%20L%200%200%200%2010%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22url(%23grid)%22%20/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-4 text-[48px]">
            Our Court, Our Rules
          </h2>
          <p className="text-xl text-gray-300">
            Booking a court means agreeing to the following terms.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-12 bg-gradient-to-r from-lime-900/30 to-yellow-900/30 border-lime-400/50 backdrop-blur-md bg-[rgba(255,255,255,0)]">
          <Info className="h-8 w-8 text-yellow-300 bg-lime-500/20 rounded-full p-1 border-2 border-lime-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.9)] shadow-[0_0_25px_rgba(163,230,53,0.8)] animate-pulse hover:scale-125 transition-all duration-300 filter brightness-150 glow-icon" style={{
            filter: 'drop-shadow(0 0 15px #ffff00) drop-shadow(0 0 25px #a3e635) brightness(1.5)',
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.8), inset 0 0 10px rgba(163, 230, 53, 0.3)'
          }} />
          <AlertDescription className="text-white">
            <span className="font-bold text-lime-300">Important Policies:</span> Please read our policies carefully before making a reservation. 
            By booking a court, you automatically agree to these terms.
          </AlertDescription>
        </Alert>

        {/* Policy Cards */}
        <div className="grid gap-6 mb-16">
          {policies.map((policy, index) => (
            <Card 
              key={index} 
              className={`backdrop-blur-md border-l-4 transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer group animate-[slideInUp_0.6s_ease-out] ${
                policy.type === 'warning' 
                  ? 'bg-orange-900/20 border-l-orange-500 border-orange-500/30 hover:bg-orange-900/30 hover:border-orange-400/60 hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]' 
                  : 'bg-blue-900/20 border-l-blue-500 border-blue-500/30 hover:bg-blue-900/30 hover:border-blue-400/60 hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)]'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden ${
                    policy.type === 'warning' 
                      ? 'bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30 group-hover:text-orange-300 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.6)]' 
                      : 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:text-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]'
                  }`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      policy.type === 'warning' 
                        ? 'bg-gradient-to-br from-orange-400/20 to-yellow-400/20' 
                        : 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20'
                    }`}></div>
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {policy.icon}
                    </div>
                  </div>
                  {/* Remove transform and translate-x here to keep text steady */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-3 transition-all duration-300 ${
                      policy.type === 'warning' 
                        ? 'text-white group-hover:text-orange-200' 
                        : 'text-white group-hover:text-blue-200'
                    }`}>
                      {policy.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100 ${
                  policy.type === 'warning' 
                    ? 'from-orange-500 to-yellow-500' 
                    : 'from-blue-500 to-cyan-500'
                }`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Court Rules */}
        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white text-center flex items-center justify-center gap-2 text-2xl">
              <AlertTriangle className="w-6 h-6 text-pink-400" />
              Additional Court Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {courtRules.map((rule, index) => (
                <div key={index} className={`flex items-start gap-3 bg-black/20 p-4 rounded-lg border border-gray-700/50 ${
                  index === courtRules.length - 1 && courtRules.length % 2 === 1 
                    ? 'md:col-span-2 md:max-w-md md:mx-auto' 
                    : ''
                }`}>
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{rule}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
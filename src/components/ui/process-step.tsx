import type { LucideIcon } from "lucide-react"

interface ProcessStepProps {
  icon: LucideIcon
  number: string
  title: string
  description: string
  color: string
}

export default function ProcessStep({ icon: Icon, number, title, description, color }: ProcessStepProps) {
  return (
    <div className="group relative">
      <div className="text-center">
        <div
          className={`relative mx-auto w-20 h-20 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className="w-10 h-10 text-white" />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-sm font-bold text-gray-800">{number}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Connector Line */}
    </div>
  )
}

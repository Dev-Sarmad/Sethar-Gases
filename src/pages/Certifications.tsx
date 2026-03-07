
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

type Certificate = {
  id: number
  title: string
  issuer: string
  image: string
}

const certificates = [
  {
    id: 1,
    title: "React Developer Certificate",
    issuer: "Meta",
    image: "/certificates/react-cert.jpg",
  },
  {
    id:2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon",
    image: "/certificates/aws-cert.jpg",
  },
  {
    id:3,
    title: "UI UX Design",
    issuer: "Google",
    image: "/certificates/uiux-cert.jpg",
  },
]
export default function Certifications() {
  return (
    <div className="container mx-auto mt-10 mb-10 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 ">
        {certificates.map((cert: Certificate) => (
          <Dialog key={cert.id}>
            <DialogTrigger asChild>
              
              <div className="cursor-pointer group">
                <div className="bg-[#5a3e2b] p-3 rounded-md shadow-xl">
                  <div className="bg-white p-2">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      width={500}
                      height={350}
                      className="rounded-sm object-cover group-hover:scale-105 transition"
                    />
                  </div>
                </div>

                <div className="text-center mt-2">
                  <p className="font-semibold">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </div>

            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="w-full">
                <img
                  src={cert.image}
                  alt={cert.title}
                  width={1200}
                  height={800}
                  className="w-full rounded-md"
                />

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>
            </DialogContent>

          </Dialog>
        ))}
      </div>
    </div>
  )
}
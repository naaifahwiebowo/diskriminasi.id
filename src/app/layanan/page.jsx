import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import Modal from "@/components/ui/modalform";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Subhero */}
        <div className="flex w-full justify-center p-10">
          <h1 className="text-4xl text-primary font-medium justify-center ">Layanan</h1>
        </div>

        {/* List konselor */}
        <div className="flex flex-col  p-8 w-full bg-secondary">
          <div className="flex justify-center flex-col gap-2 max-w-xl animate-fade animate-once">
            <h1 className="text-4xl text-primary font-medium ">Konsultasi</h1>
            <p className="text-tertiary text-md">Dapatkan dukungan psikologis yang aman dan terpercaya untuk membantumu menghadapi dampak diskriminasi.</p>
          </div>
          <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-3 place-items-center mt-10 animate-fade animate-once">
            <div className="flex flex-col items-center max-w-lg text-center gap-10">
              <Image src="/dr1.png" alt="hero" width={330} height={500} />
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl text-primary font-medium">Dr. Wiryo Nuryono, S.pd., M.Pd.</h1>
                <p className="text-tertiary text-md"> TTL : Banyuwangi, 12 Februari 1986 Jenis Kelamin : Laki - laki Pekerjaan: Dosen Bimbingan dan Konseling Universitas Negeri Surabaya No. Telpon : 081228251099</p>
                <div>
                  <Button className="text-white rounded-3xl text-md p-5">
                    <a href="https://wa.me/6281228251099">Hubungi Saya</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-lg text-center gap-10">
              <Image src="/dr2.png" alt="hero" width={330} height={500} />
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl text-primary font-medium">Sherrin Nurlita Widya, S.Pd., M.Pd.</h1>
                <p className="text-tertiary text-md">TTL : Kediri, 06 Agustus 1998 Jenis Kelamin: Perempuan Pekerjaan : Dosen Bimbingan dan Konseling Universitas Negeri Surabaya No. Telpon : 081235605158</p>
                <div>
                  <Button className="text-white rounded-3xl text-md p-5">
                    <a href="https://wa.me/6281235605158">Hubungi Saya</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-lg text-center gap-10">
              <Image src="/dr3.png" alt="hero" width={330} height={500} />
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl text-primary font-medium">  Mila Yunita, M.Pd </h1>
                <p className="text-tertiary text-md">TTL : Kediri, 26 Juni 1998 Jenis Kelamin : Perempuan   Pekerjaan: Dosen Bimbingan dan Konseling Universitas Negeri Surabaya  No. Telpon : 081336285589</p>
                <div>
                  <Button className="text-white rounded-3xl text-md p-5">
                    <a href="https://wa.me/6281336285589">Hubungi Saya</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last row */}
        <div className="flex flex-col flex-1 items-start gap-5 p-15 animate-fade animate-once">
          <div className="flex max-w-md">
            <h1 className="text-3xl text-primary font-medium">Berbagi Cerita Dengan Kami</h1>
          </div>
          <div className="flex flex-col max-w-lg gap-4">
            <p className="text-tertiary text-md">
              Setiap individu tentunya memiliki kekuatan tersendiri untuk menyentuh, menyadarkan, hingga mendorong perubahan. Di bawah ini, kamu dapat membagikan pengalaman yang pernah kamu alami atau juga kamu saksikan, sebagai bagian dari
              upaya melawan ketidakadilan. Tentunya data pribadimu akan terjaga dengan ketat sesuai dengan kebijakan privasi kami.
            </p>
            <div>
              <Modal />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

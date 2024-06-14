export default class BatasPendaftaranService{
  private id: number;
  private keterangan: string;
  private waktuMulai: Date;
  private waktuSelesai: Date;

  constructor(id: number, keterangan: string, waktuMulai: Date, waktuSelesai: Date){
    this.id = id;
    this.keterangan = keterangan;
    this.waktuMulai = waktuMulai;
    this.waktuSelesai = waktuSelesai;
  }
}
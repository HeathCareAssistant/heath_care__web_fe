export type Drug = {
    id: string
    images: (string | null)[]
    tenThuoc: string
    dotPheDuyet: string
    soQuyetDinh: string
    pheDuyet: string
    hieuLuc: string | null
    soDangKy: string
    hoatChat: string
    phanLoai: string
    nongDo: string
    taDuoc: string
    baoChe: string
    dongGoi: string
    tieuChuan: string
    tuoiTho: string
    congTySx: string
    congTySxCode: string
    nuocSx: string
    diaChiSx: string
    congTyDk: string
    nuocDk: string
    diaChiDk: string
    giaKeKhai: string | null
    huongDanSuDung: string | null
    huongDanSuDungBn: string | null
    nhomThuoc: string
    isHide: boolean | null
    rate: string
    rutSdk: number
    rutSdkFile: string[]
    chuY: string | null
    ten: string | null
    meta: {
        fileName: string
    }
    rows: any[]
    state: number
}

-- CreateTable
CREATE TABLE `batas_pendaftaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_prodi` INTEGER NOT NULL,
    `id_tahun_akademik` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `waktu_mulai` DATETIME(3) NOT NULL,
    `waktu_selesai` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `biaya` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_prodi` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `nominal` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pembayaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_biaya` INTEGER NOT NULL,
    `id_tahun_akademik` INTEGER NOT NULL,
    `nim` VARCHAR(20) NOT NULL,
    `nominal` DOUBLE NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

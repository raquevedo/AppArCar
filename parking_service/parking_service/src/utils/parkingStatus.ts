import {PkgParkingStatusRepository} from '../repositories';

export async function reserveFreeSlot(pkgParkingStatusRepository:PkgParkingStatusRepository, parkingId:number){
    /**Reserve operation */
    let currentStatus = await pkgParkingStatusRepository.findById(parkingId);
    if (currentStatus.qtyFreeSlots > 0){
      currentStatus.qtyReservedSlots += 1
      currentStatus.qtyFreeSlots -= 1
    } else {
      throw new Error("qtyFreeSlots is 0")
    }

    await pkgParkingStatusRepository.updateById(parkingId, currentStatus);
}

export async function freeReserveSlot(pkgParkingStatusRepository:PkgParkingStatusRepository, parkingId:number){
    //Cancell operation or Expire operation//
    let currentStatus = await pkgParkingStatusRepository.findById(parkingId);
    if (currentStatus.qtyReservedSlots > 0){
      currentStatus.qtyReservedSlots -= 1
      currentStatus.qtyFreeSlots += 1
    } else {
      throw new Error("qtyReservedSlots is 0")
    }

    await pkgParkingStatusRepository.updateById(parkingId, currentStatus);
}

export async function reservedToBusySlot(pkgParkingStatusRepository:PkgParkingStatusRepository, parkingId:number){
    /**Check-in operation */
    console.log("EN QUE FALLE?",parkingId)
    let currentStatus = await pkgParkingStatusRepository.findById(parkingId);
    if (currentStatus.qtyReservedSlots > 0){
      currentStatus.qtyReservedSlots -= 1
      currentStatus.qtyBusySlots += 1
    } else {
      throw new Error("qtyReservedSlots is 0")
    }

    await pkgParkingStatusRepository.updateById(parkingId, currentStatus);
}

export async function busyToFreeSlot(pkgParkingStatusRepository:PkgParkingStatusRepository, parkingId:number){
    /**Check-out operation */
    let currentStatus = await pkgParkingStatusRepository.findById(parkingId);
    if (currentStatus.qtyBusySlots > 0){
      currentStatus.qtyFreeSlots += 1
      currentStatus.qtyBusySlots -= 1
    } else {
      throw new Error("qtyBusySlots is 0")
    }

    await pkgParkingStatusRepository.updateById(parkingId, currentStatus);
}
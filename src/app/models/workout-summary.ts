interface WorkoutSummaryRow{
    totalSets: number
    totalVolume: number
}
export interface WorkoutSummary{
    chest: WorkoutSummaryRow
    back: WorkoutSummaryRow
    shoulders: WorkoutSummaryRow
    arms: WorkoutSummaryRow
    core: WorkoutSummaryRow
    quads: WorkoutSummaryRow
    hamstring: WorkoutSummaryRow
    calve: WorkoutSummaryRow
}
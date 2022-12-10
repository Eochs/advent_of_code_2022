fn main() {
    let input: &str = include_str!("./input.txt");
    let lines = input.split("\n\n");
    let max_val = lines
        .map(|line| {
            line.split("\n")
                .flat_map(|num| num.parse::<u32>())
                .sum::<u32>()
        })
        .max();

    println!("{:?}", max_val)
}

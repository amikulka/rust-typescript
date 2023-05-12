fn main() {
    let my_vec: Vec<_> = vec![1, 2, 3].iter().map(|x| x + 1).collect();

    println!("{:?}", my_vec)
}

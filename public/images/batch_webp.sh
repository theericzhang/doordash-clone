for file in ./*.webp; do 
    cwebp "$file" -q 40 -o "${file%.redo}.webp";
done

for file in ./*.png; do 
    cwebp "$file" -q 40 -o "${file%.redo}.webp";
done

for file in ./*.jpeg; do 
    cwebp "$file" -q 40 -o "${file%.redo}.webp";
done
 


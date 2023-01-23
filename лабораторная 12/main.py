import json


class Solution:
    def sum_number_in_string(self, number_string: str) -> int:
        return sum([int(i) for i in number_string])

    def get_leader_string(self, steps: int) -> str:
        return ''.join([' ' * (steps - i) + '#' * i + '\n' for i in range(1, steps + 1)])

    @staticmethod
    def to_json(func):
        def wrapper():
            return json.dumps(func())

        return wrapper

    def get_spiral_number_matrix(self, number):
        arr = [[None] * number for _ in range(number)]
        dx, dy = 1, 0
        x, y = 0, 0

        for i in range(1, number ** 2+1):
            arr[x][y] = i

            nx, ny = x + dx, y + dy
            if 0 <= nx < number and 0 <= ny < number and not arr[nx][ny]:
                x, y = nx, ny
            else:
                dx, dy = -dy, dx
                x, y = x + dx, y + dy

        return arr


if __name__ == '__main__':
    sol = Solution()

    print(sol.sum_number_in_string('12345'))
    print(sol.get_leader_string(10))
    
    @sol.to_json
    def get_data():
        return {
            'data': '42',
        }

    print(get_data())
    
    print(sol.get_spiral_number_matrix(5))
